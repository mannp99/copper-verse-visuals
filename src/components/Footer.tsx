
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-steel-800 to-steel-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-copper-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated with CopperCraft</h3>
              <p className="text-copper-100">Get the latest updates on products, innovations, and industry news</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 bg-white/90 text-gray-800 rounded-l-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-copper-400"
              />
              <Button className="bg-white hover:bg-gray-100 text-copper-700 rounded-l-none hover-scale">
                Subscribe <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="animate-fade-in" style={{animationDelay: "100ms"}}>
            <div className="flex items-center space-x-2 mb-5">
              <svg className="h-7 w-7 text-copper-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor" opacity="0.2"/>
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>
              </svg>
              <h3 className="text-xl font-bold text-copper-300">CopperCraft</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Premium copper manufacturing solutions since 1985. Quality and precision in every product.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-copper-300 transition-colors hover-scale inline-block">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-copper-300 transition-colors hover-scale inline-block">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-copper-300 transition-colors hover-scale inline-block">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{animationDelay: "200ms"}}>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-copper-600 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-copper-300 transition-colors flex items-center group">
                  <ArrowRight className="h-4 w-0 mr-0 text-copper-300 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-copper-300 transition-colors flex items-center group">
                  <ArrowRight className="h-4 w-0 mr-0 text-copper-300 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all" />
                  Products
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="text-gray-300 hover:text-copper-300 transition-colors flex items-center group">
                  <ArrowRight className="h-4 w-0 mr-0 text-copper-300 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all" />
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-copper-300 transition-colors flex items-center group">
                  <ArrowRight className="h-4 w-0 mr-0 text-copper-300 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-copper-300 transition-colors flex items-center group">
                  <ArrowRight className="h-4 w-0 mr-0 text-copper-300 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div className="animate-fade-in" style={{animationDelay: "300ms"}}>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-copper-600 pb-2">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products#busbars" className="text-gray-300 hover:text-copper-300 transition-colors flex items-center group">
                  <ArrowRight className="h-4 w-0 mr-0 text-copper-300 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all" />
                  Copper Bus Bars
                </Link>
              </li>
              <li>
                <Link to="/products#transformers" className="text-gray-300 hover:text-copper-300 transition-colors flex items-center group">
                  <ArrowRight className="h-4 w-0 mr-0 text-copper-300 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all" />
                  Transformers
                </Link>
              </li>
              <li>
                <Link to="/products#rods" className="text-gray-300 hover:text-copper-300 transition-colors flex items-center group">
                  <ArrowRight className="h-4 w-0 mr-0 text-copper-300 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all" />
                  Vending & Normal Rods
                </Link>
              </li>
              <li>
                <Link to="/products#wire" className="text-gray-300 hover:text-copper-300 transition-colors flex items-center group">
                  <ArrowRight className="h-4 w-0 mr-0 text-copper-300 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all" />
                  Conductive Wire
                </Link>
              </li>
              <li>
                <Link to="/products#custom" className="text-gray-300 hover:text-copper-300 transition-colors flex items-center group">
                  <ArrowRight className="h-4 w-0 mr-0 text-copper-300 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all" />
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="animate-fade-in" style={{animationDelay: "400ms"}}>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-copper-600 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start hover-scale group">
                <MapPin className="h-5 w-5 text-copper-300 mr-2 mt-0.5 group-hover:text-copper-400 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">123 Industrial Lane, Business Park, Manufacturing City, MC 12345</span>
              </li>
              <li className="flex items-center hover-scale group">
                <Phone className="h-5 w-5 text-copper-300 mr-2 group-hover:text-copper-400 transition-colors" />
                <a href="tel:+1234567890" className="text-gray-300 group-hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center hover-scale group">
                <Mail className="h-5 w-5 text-copper-300 mr-2 group-hover:text-copper-400 transition-colors" />
                <a href="mailto:info@coppercraft.com" className="text-gray-300 group-hover:text-white transition-colors">
                  info@coppercraft.com
                </a>
              </li>
              <li className="pt-4">
                <Button variant="outline" className="bg-transparent border-copper-400 text-copper-300 hover:bg-copper-400/10 hover:text-copper-200 hover-scale">
                  <span>View on Map</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-gray-400 mb-4 md:mb-0">
              © {currentYear} CopperCraft. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-copper-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-copper-300 transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-sm text-gray-400 hover:text-copper-300 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
