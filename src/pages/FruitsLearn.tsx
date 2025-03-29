import React, { useEffect, useState } from "react";
import fruitsData from "../fruitsData";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import Character from "@/components/Character";
import useChatFruit from "@/hooks/useChatFruit";
import useChat from "@/hooks/useChat";
const FruitListPage = () => {
  const { setInput, sendMessage, messages, isLoading, input } = useChat();
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [fruitName, setFruitName] = useState("");
  const [load, setLoad] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFruitClick = async (fruit) => {
    setSelectedFruit(fruit);
    setInput( `Donne-moi une description du fruit ${fruit.name} en français en 30 mots max.`);
    await sendMessage();
    setFruitName(fruit.name);
    setLoad(true);
    console.log(fruit.name);
  };
  
  useEffect(() => {
    if (input) {
      sendMessage().then(() => {
        setShowModal(true);
        setLoad(false);
      });
    }
  }, [input]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 p-6 flex flex-col items-center">
        <div className="w-full max-w-7xl">
          <Link to="/">
            <button className="bg-kid-blue hover:bg-kid-blue-600 text-white rounded-lg px-4 py-2 flex items-center justify-center">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">
              Liste des Fruits
            </h1>
            <p className="text-gray-600">
              Découvrez tous les fruits avec leurs images !
            </p>
          </div>
          <Character />.
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {fruitsData.length > 0 ? (
              fruitsData.map((fruit, index) => (
                <div
                  key={index}
                  className="p-4 border-2 border-gray-300 rounded-lg shadow-md bg-white hover:border-blue-500 cursor-pointer" // Rendre toute la carte cliquable
                  onClick={() => handleFruitClick(fruit)}
                >
                  <img
                    src={fruit.image}
                    alt={fruit.name}
                    className="w-full h-40 object-cover mb-4 rounded-md"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {fruit.name || "Fruit sans nom"}
                  </h3>
                </div>
              ))
            ) : (
              <p>Chargement des fruits...</p>
            )}
          </div>
        </div>
      </main>

      {showModal && selectedFruit && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <img
              src={selectedFruit.image}
              alt={selectedFruit.name}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-bold mb-4">{selectedFruit.name}</h2>
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Loader2 className="w-6 h-6 animate-spin" />
              </div>
            ) : (
              <p className="mb-4">
                {messages.length > 0 &&
                  messages[messages.length - 1].sender === "gemini" &&
                  messages[messages.length - 1].text}
              </p>
            )}
            <Button
              onClick={handleCloseModal}
              className="bg-red-500 text-white"
            >
              Fermer
            </Button>
          </div>
        </div>
      )}

      <footer className="py-6 text-center text-gray-500 bg-white">
        <p>AI Fruit Explorer - Apprends avec les fruits !</p>
      </footer>
    </div>
  );
};

export default FruitListPage;
