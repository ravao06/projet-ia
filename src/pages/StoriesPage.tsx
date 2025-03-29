import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InferenceClient } from "@huggingface/inference";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import Character from "@/components/Character";

const client = new InferenceClient(import.meta.env.VITE_HUGGINGFACE_API_KEY);

const fallbackStories = [
  {
    story:
      "Il était une fois un petit chat nommé Minou qui vivait dans une forêt enchantée. Un jour, alors qu'il explorait les alentours, il trouva une clé dorée brillante près d'un vieux chêne. Que devrait faire Minou avec cette clé mystérieuse ?",
    choices: [
      "Essayer de trouver à quelle serrure correspond cette clé",
      "Montrer la clé aux autres animaux de la forêt",
      "Garder la clé comme un trésor dans sa cachette secrète",
    ],
  },
  {
    story:
      "Dans un royaume lointain vivait une petite princesse qui s'ennuyait terriblement dans son château. Un matin, elle découvrit un passage secret derrière sa bibliothèque. Le passage semblait mener profondément sous le château. Que devrait faire la princesse ?",
    choices: [
      "Explorer le passage secret toute seule",
      "Demander à son ami le jardinier de l'accompagner",
      "Dessiner une carte et préparer une expédition pour le lendemain",
    ],
  },
  {
    story:
      "Sur une planète lointaine, un petit robot nommé Beep s'était perdu lors d'une tempête de poussière. Quand la tempête se calma, Beep aperçut trois chemins différents. Lequel devrait-il prendre ?",
    choices: [
      "Le chemin qui mène vers les montagnes brillantes",
      "Le sentier qui traverse la vallée verte",
      "La route qui va vers les lumières de la ville au loin",
    ],
  },
];

const storyPrompts = [
  "Raconte une aventure fantastique d'un enfant qui découvre un monde magique.",
  "Raconte une histoire amusante d'un robot qui veut devenir humain.",
  "Raconte une aventure dans l'espace où un enfant découvre une nouvelle planète.",
  "Raconte l'histoire d'un petit animal qui part à la recherche de sa famille.",
  "Raconte une histoire de pirates à la recherche d'un trésor caché.",
];

const getRandomPrompt = () => {
  return storyPrompts[Math.floor(Math.random() * storyPrompts.length)];
};

const getRandomFallbackStory = () => {
  return fallbackStories[Math.floor(Math.random() * fallbackStories.length)];
};

const fetchStoryFromAI = async (prompt: string, isInitial = false) => {
  try {
    const fullPrompt = isInitial
      ? `${prompt} L'histoire doit être adaptée aux enfants, positive et se terminer par 3 choix possibles pour la suite de l'aventure. Format de réponse: [HISTOIRE] le contenu de l'histoire [CHOIX] 1. Premier choix 2. Deuxième choix 3. Troisième choix`
      : `Continue l'histoire en fonction de ce choix: "${prompt}". L'histoire doit être adaptée aux enfants, positive et se terminer par 3 choix possibles pour la suite de l'aventure. Format de réponse: [HISTOIRE] le contenu de l'histoire [CHOIX] 1. Premier choix 2. Deuxième choix 3. Troisième choix`;

    let response;

    try {
      response = await client.textGeneration({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        inputs: fullPrompt,
        parameters: {
          max_new_tokens: 500,
          temperature: 0.7,
        },
      });
    } catch (firstError) {
      try {
        response = await client.textGeneration({
          model: "gpt2",
          inputs: fullPrompt,
          parameters: {
            max_new_tokens: 200,
          },
        });
        console.log("Réponse API (modèle de repli):", response);
      } catch (secondError) {
        console.error("Deuxième modèle échoué:", secondError);
        throw new Error("Tous les modèles ont échoué");
      }
    }

    if (!response || !response.generated_text) {
      throw new Error("Réponse invalide de l'API");
    }

    const content = response.generated_text;

    let story = content;
    let choices: string[] = [];

    if (content.includes("[HISTOIRE]") && content.includes("[CHOIX]")) {
      const storyPart = content
        .split("[HISTOIRE]")[1]
        .split("[CHOIX]")[0]
        .trim();
      const choicesPart = content.split("[CHOIX]")[1].trim();

      story = storyPart;

      const choicesMatch = choicesPart.match(/\d+\.\s+(.*?)(?=\d+\.|$)/gs);
      if (choicesMatch) {
        choices = choicesMatch.map((c) => c.replace(/^\d+\.\s+/, "").trim());
      }
    }

    if (choices.length === 0) {
      const lines = content.split("\n").filter((line) => line.trim());
      const lastLines = lines.slice(-4);

      const choiceLines = lastLines.filter(
        (line) =>
          /^\d+\s*[.:]/.test(line) ||
          line.includes("choix") ||
          line.includes("option")
      );

      if (choiceLines.length > 0) {
        choices = choiceLines.map((line) =>
          line.replace(/^\d+\s*[.:]\s*/, "").trim()
        );
        story = content.split(choiceLines[0])[0].trim();
      }
    }

    if (choices.length === 0) {
      choices = [
        "Continuer l'aventure courageusement",
        "Prendre une autre direction",
        "Demander de l'aide",
      ];
    }

    choices = choices.slice(0, 3);

    return { story, choices };
  } catch (error) {
    console.error("Erreur lors de l'appel à l'API :", error);
    return getRandomFallbackStory();
  }
};

const StoriesPage = () => {
  const [storyState, setStoryState] = useState<
    "start" | "in-progress" | "choice"
  >("start");
  const [storyContent, setStoryContent] = useState<string>(
    "Bienvenue dans l'aventure !"
  );
  const [choices, setChoices] = useState<string[]>([]);
  const [previousChoices, setPreviousChoices] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const startStory = async () => {
    setStoryState("in-progress");
    setLoading(true);
    const randomPrompt = getRandomPrompt();
    try {
      const initialStory = await fetchStoryFromAI(randomPrompt, true);
      setStoryContent(initialStory.story);
      setChoices(initialStory.choices);
      setPreviousChoices([]);
      setStoryState("choice");
    } catch (error) {
      const fallback = getRandomFallbackStory();
      setStoryContent(fallback.story);
      setChoices(fallback.choices);
      setPreviousChoices([]);
      setStoryState("choice");
    } finally {
      setLoading(false);
    }
  };

  const makeChoice = async (choice: string) => {
    setStoryState("in-progress");
    setLoading(true);
    setPreviousChoices([...previousChoices, choice]);
    try {
      const nextPart = await fetchStoryFromAI(choice);
      setStoryContent(nextPart.story);
      setChoices(nextPart.choices);
      setStoryState("choice");
    } catch (error) {
      const fallback = getRandomFallbackStory();
      setStoryContent(fallback.story);
      setChoices(fallback.choices);
      setStoryState("choice");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <main className="flex-1 p-6 flex flex-col items-center">
        <div className="w-full max-w-7xl">
          <Link to="/">
            <button className="bg-kid-blue hover:bg-kid-blue-600 text-white rounded-lg px-4 py-2 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
        </div>
          <div className="w-full max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2 text-gray-800">
                Histoires interactives avec l'IA
              </h1>
              <p className="text-gray-600">
                Influence l'histoire avec tes choix !
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mb-3">
                  <Character />.
                </div>
                {storyState === "start" && (
                  <div className="bg-white p-3 rounded-lg shadow-md relative max-w-xs text-center">
                    <p>Prêt pour l'aventure ?</p>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                  </div>
                )}
              </div>
            </div>

            <Card className="bg-white shadow-lg border-2 mb-6">
              <CardContent className="p-6">
                {loading ? (
                  <div className="text-center py-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-2"></div>
                    <p className="text-lg text-gray-500">
                      Chargement de l'histoire...
                    </p>
                  </div>
                ) : (
                  <p className="text-lg leading-relaxed whitespace-pre-line">
                    {storyContent}
                  </p>
                )}
              </CardContent>
            </Card>

            {storyState === "start" && !loading && (
              <div className="flex justify-center">
                <Button onClick={startStory} className="w-full max-w-xs">
                  Commencer l'aventure
                </Button>
              </div>
            )}

            {storyState === "choice" && !loading && (
              <div className="flex flex-wrap gap-4">
                {choices.map((choice, index) => (
                  <Button
                    key={index}
                    onClick={() => makeChoice(choice)}
                    className="whitespace-nowrap max-w-full"
                    title={choice}
                  >
                    {choice}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default StoriesPage;
