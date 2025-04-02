
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-steel-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-copper-300">CopperCraft</h3>
            <p className="text-gray-300 mb-4">
              Premium copper manufacturing solutions since 1985. Quality and precision in every product.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-copper-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-copper-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-copper-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-copper-300 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="text-gray-300 hover:text-copper-300 transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-copper-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-copper-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products#busbars" className="text-gray-300 hover:text-copper-300 transition-colors">
                  Copper Bus Bars
                </Link>
              </li>
              <li>
                <Link to="/products#transformers" className="text-gray-300 hover:text-copper-300 transition-colors">
                  Transformers
                </Link>
              </li>
              <li>
                <Link to="/products#rods" className="text-gray-300 hover:text-copper-300 transition-colors">
                  Vending & Normal Rods
                </Link>
              </li>
              <li>
                <Link to="/products#wire" className="text-gray-300 hover:text-copper-300 transition-colors">
                  Conductive Wire
                </Link>
              </li>
              <li>
                <Link to="/products#custom" className="text-gray-300 hover:text-copper-300 transition-colors">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-copper-300 mr-2 mt-0.5" />
                <span className="text-gray-300">123 Industrial Lane, Business Park, Manufacturing City, MC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-copper-300 mr-2" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-copper-300">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-copper-300 mr-2" />
                <a href="mailto:info@coppercraft.com" className="text-gray-300 hover:text-copper-300">
                  info@coppercraft.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} CopperCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
