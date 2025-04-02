
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-sm transition-all duration-300",
        isScrolled 
          ? "bg-white/90 border-b border-border shadow-sm" 
          : "bg-white"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2 group">
          <svg className="h-8 w-8 text-copper-600 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor" opacity="0.2"/>
            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>
          </svg>
          <span className="text-2xl font-bold bg-gradient-to-r from-copper-600 to-copper-800 bg-clip-text text-transparent">
            CopperCraft
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-gray-700 hover:text-copper-500 transition-colors",
                    isActive('/') && "text-copper-600 font-medium bg-copper-50"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className={cn(
                  "text-gray-700 hover:text-copper-500 transition-colors",
                  (isActive('/products') || location.pathname.includes('products')) && 
                  "text-copper-600 font-medium bg-copper-50"
                )}
              >
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-copper-400 to-copper-600 p-6 no-underline outline-none focus:shadow-md"
                        href="/products"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-white">
                          Premium Copper Solutions
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Explore our complete range of high-quality copper products for all industrial needs
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/products#busbars"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-copper-50 hover:text-copper-600 focus:bg-copper-50 focus:text-copper-600"
                      >
                        <div className="text-sm font-medium leading-none">Copper Bus Bars</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Custom-engineered for optimal electrical conductivity
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/products#transformers"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-copper-50 hover:text-copper-600 focus:bg-copper-50 focus:text-copper-600"
                      >
                        <div className="text-sm font-medium leading-none">Transformers</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Precision-wound copper components for reliable power transfer
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/products#rods"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-copper-50 hover:text-copper-600 focus:bg-copper-50 focus:text-copper-600"
                      >
                        <div className="text-sm font-medium leading-none">Copper Rods</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          High-conductivity rods for industrial applications
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/manufacturing">
                <NavigationMenuLink 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-gray-700 hover:text-copper-500 transition-colors",
                    isActive('/manufacturing') && "text-copper-600 font-medium bg-copper-50"
                  )}
                >
                  Manufacturing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-gray-700 hover:text-copper-500 transition-colors",
                    isActive('/about') && "text-copper-600 font-medium bg-copper-50"
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-gray-700 hover:text-copper-500 transition-colors",
                    isActive('/contact') && "text-copper-600 font-medium bg-copper-50"
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button variant="outline" className="hidden md:flex border-copper-500 text-copper-600 hover:bg-copper-50 hover-scale">
          <span>Get a Quote</span>
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? 
            <X className="h-6 w-6 text-gray-700 animate-fade-in" /> : 
            <Menu className="h-6 w-6 text-gray-700 animate-fade-in" />
          }
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-border animate-slide-in-right">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <Link 
              to="/" 
              className={cn(
                "block py-2 px-4 rounded-md transition-colors",
                isActive('/') 
                  ? "bg-copper-50 text-copper-600" 
                  : "text-gray-700 hover:bg-copper-50 hover:text-copper-600"
              )}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={cn(
                "block py-2 px-4 rounded-md transition-colors",
                isActive('/products') 
                  ? "bg-copper-50 text-copper-600" 
                  : "text-gray-700 hover:bg-copper-50 hover:text-copper-600"
              )}
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link 
              to="/manufacturing" 
              className={cn(
                "block py-2 px-4 rounded-md transition-colors",
                isActive('/manufacturing') 
                  ? "bg-copper-50 text-copper-600" 
                  : "text-gray-700 hover:bg-copper-50 hover:text-copper-600"
              )}
              onClick={toggleMenu}
            >
              Manufacturing
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "block py-2 px-4 rounded-md transition-colors",
                isActive('/about') 
                  ? "bg-copper-50 text-copper-600" 
                  : "text-gray-700 hover:bg-copper-50 hover:text-copper-600"
              )}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "block py-2 px-4 rounded-md transition-colors",
                isActive('/contact') 
                  ? "bg-copper-50 text-copper-600" 
                  : "text-gray-700 hover:bg-copper-50 hover:text-copper-600"
              )}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button variant="outline" className="w-full border-copper-500 text-copper-600 hover:bg-copper-50 hover-scale">
                Get a Quote
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
