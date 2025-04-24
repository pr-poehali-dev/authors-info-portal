import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import FeaturedAuthors from "@/components/FeaturedAuthors";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedBooks />
        <FeaturedAuthors />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-playfair text-3xl font-bold mb-6">Присоединяйтесь к нашему сообществу</h2>
            <p className="text-lg text-gray-600 mb-8">
              Создайте свой аккаунт, чтобы получить доступ к обсуждениям книг, сохранять избранные произведения и 
              получать персональные рекомендации по чтению.
            </p>
            <div className="bg-book-accent p-6 rounded-lg">
              <p className="font-medium mb-4">Уже более 5000 читателей используют наш сервис!</p>
              <ul className="text-left mx-auto max-w-md mb-6">
                <li className="flex items-center mb-3">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Доступ к информации о более чем 10,000 книг</span>
                </li>
                <li className="flex items-center mb-3">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Подробные профили авторов и их библиографии</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Возможность создавать собственные списки чтения</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;