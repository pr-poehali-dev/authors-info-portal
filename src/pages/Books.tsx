import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
  description: string;
  coverUrl: string;
  rating: number;
}

const books: Book[] = [
  {
    id: 1,
    title: "Война и мир",
    author: "Лев Толстой",
    genre: "Роман",
    year: 1869,
    description: "Масштабный роман-эпопея, описывающий события войны 1812 года и жизнь русского общества в эпоху Наполеоновских войн.",
    coverUrl: "/placeholder.svg",
    rating: 4.9
  },
  {
    id: 2,
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    genre: "Роман",
    year: 1866,
    description: "Психологический роман о моральных и ментальных страданиях бедного студента Родиона Раскольникова после совершения убийства.",
    coverUrl: "/placeholder.svg",
    rating: 4.8
  },
  {
    id: 3,
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    genre: "Фантастика",
    year: 1940,
    description: "Сатирический роман о визите дьявола в атеистическую Москву советской эпохи.",
    coverUrl: "/placeholder.svg",
    rating: 4.9
  },
  {
    id: 4,
    title: "Евгений Онегин",
    author: "Александр Пушкин",
    genre: "Поэзия",
    year: 1833,
    description: "Роман в стихах, повествующий о судьбе молодого дворянина начала XIX века.",
    coverUrl: "/placeholder.svg",
    rating: 4.7
  },
  {
    id: 5,
    title: "Анна Каренина",
    author: "Лев Толстой",
    genre: "Роман",
    year: 1877,
    description: "Роман о трагической любви замужней женщины высшего общества и молодого офицера.",
    coverUrl: "/placeholder.svg",
    rating: 4.8
  },
  {
    id: 6,
    title: "Идиот",
    author: "Фёдор Достоевский",
    genre: "Роман",
    year: 1869,
    description: "История князя Мышкина, чистого душой человека, который сталкивается с жестокой реальностью общества.",
    coverUrl: "/placeholder.svg",
    rating: 4.7
  }
];

const genreOptions = ["Все жанры", "Роман", "Поэзия", "Фантастика", "Драма", "Детектив"];

const BooksPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Все жанры");

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "Все жанры" || book.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-playfair mb-2">Библиотека книг</h1>
          <p className="text-gray-600 max-w-3xl">
            Изучите нашу коллекцию классической и современной литературы. Здесь вы найдете произведения 
            известных авторов разных жанров и эпох.
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Поиск по названию или автору..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Tabs 
            defaultValue="Все жанры" 
            className="w-full md:w-auto"
            value={selectedGenre}
            onValueChange={setSelectedGenre}
          >
            <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
              {genreOptions.map((genre) => (
                <TabsTrigger key={genre} value={genre}>
                  {genre}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <Card key={book.id} className="overflow-hidden flex flex-col h-full">
                <div className="aspect-[2/3] bg-gray-100 relative overflow-hidden">
                  <img 
                    src={book.coverUrl} 
                    alt={book.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-playfair">{book.title}</CardTitle>
                      <CardDescription>{book.author}, {book.year}</CardDescription>
                    </div>
                    <Badge variant="outline">{book.genre}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-600">{book.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium">{book.rating}</span>
                  </div>
                  <Button size="sm">Подробнее</Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium mb-2">Книги не найдены</h3>
              <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BooksPage;