import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="py-16 hero-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Откройте для себя мир литературы
          </h1>
          <p className="text-lg text-gray-600 mb-8 animate-fade-in">
            Погрузитесь в увлекательный мир книг, найдите новых авторов и делитесь своими впечатлениями с единомышленниками.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Button size="lg" className="bg-book-primary hover:bg-book-secondary" asChild>
              <Link to="/books">Смотреть книги</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/register">Создать аккаунт</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;