
import React from 'react';
import Header from '@/components/Header';
import DrawingRecognizer from '@/components/DrawingRecognizer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const DrawingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 p-6 flex flex-col items-center">
        <div className="w-full max-w-4xl">
        <Link to="/">
            <button className="bg-kid-blue hover:bg-kid-blue-600 text-white rounded-lg px-4 py-2 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">Reconnaissance de dessins</h1>
            <p className="text-gray-600">Dessine quelque chose et je devinerai ce que c'est !</p>
          </div>
          
          <DrawingRecognizer />
        </div>
      </main>
      
      <footer className="py-6 text-center text-gray-500 bg-white">
        <p>AI Kid Explorer - Apprends en t'amusant !</p>
      </footer>
    </div>
  );
};

export default DrawingPage;
