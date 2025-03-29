import { Send, Bot, User, ArrowLeft } from "lucide-react";
import useChat from "@/hooks/useChat";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { useMessageStore } from "@/store/messageStore";
import { useEffect, useState } from "react";
function TalkAIPage() {
  const message = useMessageStore((state) => state.message);
  const [loading, setLoading] = useState(false);
  const {
    messages,
    input,
    isLoading,
    chatContainerRef,
    setInput,
    sendMessage,
    handleKeyPress,
  } = useChat();

  useEffect(() => {
    setInput(message);
    sendMessage();
    setLoading(true);
  }, [message, loading]);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 p-6 flex flex-col items-center">
        <div className="w-full max-w-7xl">
          <Link to="/">
            <button className="bg-kid-blue hover:bg-kid-blue-600 text-white rounded-lg px-4 py-2 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">
            Bienvenue sur le Chat AI !
          </h1>
          <p className="text-xl text-gray-600">
            Pose-moi tes questions, je suis là pour t'aider !
          </p>
        </div>

        <div
          ref={chatContainerRef}
          className="w-full max-w-2xl bg-white rounded-xl shadow-lg flex flex-col h-[600px]"
        >
          <div className="bg-gradient-to-r from-kid-blue via-kid-purple to-kid-pink p-4 rounded-t-xl">
            <h1 className="text-white text-xl font-semibold">Talk AI</h1>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start space-x-2 ${
                  message.sender === "user"
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === "user" ? "bg-kid-blue" : "bg-kid-green"
                  }`}
                >
                  {message.sender === "user" ? (
                    <div className="rounded-full bg-gradient-to-r from-kid-blue via-kid-purple to-kid-pink p-1 flex items-center justify-center">
                      <span className="text-xl font-bold text-white">👶</span>
                    </div>
                  ) : (
                    <Bot className="w-5 h-5 text-white" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-kid-blue text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-kid-green flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <textarea
                value={input}
                autoFocus
                // defaultValue={newMessage}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Écris ton message..."
                className="flex-1 resize-none rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-kid-blue min-h-[44px] max-h-32"
                rows={1}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || input.trim() === ""}
                className="bg-kid-blue hover:bg-kid-blue-600 text-white rounded-lg px-4 py-2 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Appuie sur Entrée pour envoyer, Maj + Entrée pour nouvelle ligne
            </p>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-gray-500 bg-white">
        <p>AI Kid Explorer - Apprends en t'amusant !</p>
      </footer>
    </div>
  );
}

export default TalkAIPage;
