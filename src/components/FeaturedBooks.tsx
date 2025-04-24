import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  imageUrl: string;
}

const featuredBooks: Book[] = [
  {
    id: 1,
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    genre: "Классика",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    genre: "Классика",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Война и мир",
    author: "Лев Толстой",
    genre: "Классика",
    imageUrl: "/placeholder.svg"
  }
];

const FeaturedBooks: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl font-bold mb-8 text-center">Популярные книги</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
            <Card key={book.id} className="book-card">
              <CardHeader className="p-4">
                <div className="w-full h-48 bg-gray-100 rounded-md overflow-hidden mb-4">
                  <img 
                    src={book.imageUrl} 
                    alt={book.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="font-playfair text-xl">{book.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-600">{book.author}</p>
                <Badge className="mt-2 bg-book-accent text-book-primary">{book.genre}</Badge>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/books/${book.id}`}>Подробнее</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild>
            <Link to="/books">Смотреть все книги</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;