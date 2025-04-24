import React from "react";
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink 
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, HomeIcon } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-book-primary" />
          <span className="font-playfair text-xl font-bold">Мир Книг</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-slate-100 transition-colors">
                  <HomeIcon className="h-4 w-4 mr-2" />
                  Главная
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/authors" className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-slate-100 transition-colors">
                  <Users className="h-4 w-4 mr-2" />
                  Авторы
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/books" className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-slate-100 transition-colors">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Книги
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/login">Вход</Link>
          </Button>
          <Button size="sm" className="bg-book-primary hover:bg-book-secondary" asChild>
            <Link to="/register">Регистрация</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;