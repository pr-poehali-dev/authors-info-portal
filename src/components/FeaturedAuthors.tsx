import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Author {
  id: number;
  name: string;
  books: number;
  imageUrl: string;
}

const featuredAuthors: Author[] = [
  {
    id: 1,
    name: "Фёдор Достоевский",
    books: 12,
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Лев Толстой",
    books: 15,
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Михаил Булгаков",
    books: 8,
    imageUrl: "/placeholder.svg"
  }
];

const FeaturedAuthors: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl font-bold mb-8 text-center">Известные авторы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredAuthors.map((author) => (
            <div 
              key={author.id} 
              className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={author.imageUrl} alt={author.name} />
                <AvatarFallback className="bg-book-primary text-white text-xl">
                  {author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-playfair text-xl font-semibold mb-1">{author.name}</h3>
              <p className="text-gray-500 mb-4">{author.books} книг в библиотеке</p>
              <Button variant="outline" size="sm" className="mt-auto" asChild>
                <Link to={`/authors/${author.id}`}>Подробнее</Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild>
            <Link to="/authors">Все авторы</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAuthors;