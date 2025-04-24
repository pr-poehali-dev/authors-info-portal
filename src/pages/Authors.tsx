import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const authors = [
  {
    id: 1,
    name: "Федор Достоевский",
    image: "/placeholder.svg",
    bio: "Русский писатель, мыслитель, философ и публицист. Член-корреспондент Петербургской АН.",
    books: ["Преступление и наказание", "Братья Карамазовы", "Идиот"],
    period: "19 век"
  },
  {
    id: 2,
    name: "Лев Толстой",
    image: "/placeholder.svg",
    bio: "Один из наиболее известных русских писателей и мыслителей, один из величайших писателей мира.",
    books: ["Война и мир", "Анна Каренина", "Воскресение"],
    period: "19 век"
  },
  {
    id: 3,
    name: "Александр Пушкин",
    image: "/placeholder.svg",
    bio: "Русский поэт, драматург и прозаик, заложивший основы русского реалистического направления.",
    books: ["Евгений Онегин", "Капитанская дочка", "Борис Годунов"],
    period: "19 век"
  },
  {
    id: 4,
    name: "Михаил Булгаков",
    image: "/placeholder.svg",
    bio: "Русский писатель, драматург, театральный режиссёр и актёр. Автор повестей, рассказов, фельетонов, пьес, инсценировок, киносценариев и оперных либретто.",
    books: ["Мастер и Маргарита", "Собачье сердце", "Белая гвардия"],
    period: "20 век"
  },
  {
    id: 5,
    name: "Борис Пастернак",
    image: "/placeholder.svg",
    bio: "Русский поэт, писатель и переводчик. Лауреат Нобелевской премии по литературе.",
    books: ["Доктор Живаго", "Сестра моя — жизнь", "Второе рождение"],
    period: "20 век"
  },
  {
    id: 6,
    name: "Антон Чехов",
    image: "/placeholder.svg",
    bio: "Русский писатель, прозаик, драматург. Классик мировой литературы. По профессии врач.",
    books: ["Вишнёвый сад", "Чайка", "Палата №6"],
    period: "19 век"
  }
];

const AuthorsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2 text-center font-playfair">Известные авторы</h1>
        <p className="text-center text-gray-600 mb-8">Познакомьтесь с великими писателями и их произведениями</p>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">Все авторы</TabsTrigger>
            <TabsTrigger value="19century">19 век</TabsTrigger>
            <TabsTrigger value="20century">20 век</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {authors.map(author => (
                <AuthorCard key={author.id} author={author} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="19century">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {authors
                .filter(author => author.period === "19 век")
                .map(author => (
                  <AuthorCard key={author.id} author={author} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="20century">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {authors
                .filter(author => author.period === "20 век")
                .map(author => (
                  <AuthorCard key={author.id} author={author} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

interface AuthorProps {
  author: {
    id: number;
    name: string;
    image: string;
    bio: string;
    books: string[];
    period: string;
  };
}

const AuthorCard: React.FC<AuthorProps> = ({ author }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row gap-4 items-start">
        <Avatar className="h-16 w-16">
          <AvatarImage src={author.image} alt={author.name} />
          <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="font-playfair">{author.name}</CardTitle>
          <CardDescription>{author.period}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{author.bio}</p>
        <div>
          <h4 className="text-sm font-medium mb-2">Известные произведения:</h4>
          <ul className="text-sm text-gray-600 list-disc pl-5">
            {author.books.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <div className="text-sm text-gray-500">Подробнее →</div>
      </CardFooter>
    </Card>
  );
};

export default AuthorsPage;