
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-copper-600">CopperCraft</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-copper-500 transition-colors font-medium">
            Home
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-copper-500 transition-colors font-medium">
            Products
          </Link>
          <Link to="/manufacturing" className="text-gray-700 hover:text-copper-500 transition-colors font-medium">
            Manufacturing
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-copper-500 transition-colors font-medium">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-copper-500 transition-colors font-medium">
            Contact
          </Link>
        </nav>

        <Button variant="outline" className="hidden md:flex border-copper-500 text-copper-600 hover:bg-copper-50">
          Get a Quote
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <Link 
              to="/" 
              className="block py-2 px-4 text-gray-700 hover:bg-copper-50 hover:text-copper-600 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block py-2 px-4 text-gray-700 hover:bg-copper-50 hover:text-copper-600 rounded-md"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link 
              to="/manufacturing" 
              className="block py-2 px-4 text-gray-700 hover:bg-copper-50 hover:text-copper-600 rounded-md"
              onClick={toggleMenu}
            >
              Manufacturing
            </Link>
            <Link 
              to="/about" 
              className="block py-2 px-4 text-gray-700 hover:bg-copper-50 hover:text-copper-600 rounded-md"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 px-4 text-gray-700 hover:bg-copper-50 hover:text-copper-600 rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button variant="outline" className="w-full border-copper-500 text-copper-600 hover:bg-copper-50">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
