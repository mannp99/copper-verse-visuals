
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { ArrowRight, Check, Factory, Shield, Truck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Premium Copper Manufacturing Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-copper-100 animate-fade-in">
              From bus bars to transformers, we deliver high-quality copper products with precision engineering
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
              <Button className="bg-white text-copper-700 hover:bg-gray-100 hover:text-copper-800 px-6 py-6 text-lg" asChild>
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 text-lg" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose <span className="text-copper-600">CopperCraft</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="bg-gray-50 p-6 rounded-lg hover-scale card-shadow">
              <div className="bg-copper-100 p-3 rounded-full inline-block mb-4">
                <Factory className="h-8 w-8 text-copper-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Advanced Manufacturing</h3>
              <p className="text-gray-600">
                State-of-the-art facilities and equipment for precision copper fabrication.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover-scale card-shadow">
              <div className="bg-copper-100 p-3 rounded-full inline-block mb-4">
                <Shield className="h-8 w-8 text-copper-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous testing and quality control for reliable performance.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover-scale card-shadow">
              <div className="bg-copper-100 p-3 rounded-full inline-block mb-4">
                <Truck className="h-8 w-8 text-copper-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Fast Delivery</h3>
              <p className="text-gray-600">
                Efficient logistics and global shipping capabilities for your timeline.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover-scale card-shadow">
              <div className="bg-copper-100 p-3 rounded-full inline-block mb-4">
                <Award className="h-8 w-8 text-copper-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Industry Expertise</h3>
              <p className="text-gray-600">
                Over 35 years of experience in copper manufacturing excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our range of high-quality copper manufacturing solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg overflow-hidden hover-scale card-shadow">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-copper-600 h-full w-full opacity-20"></div>
                  <span className="text-xl font-semibold text-white z-10">Copper Bus Bars</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Copper Bus Bars</h3>
                <p className="text-gray-600 mb-4">
                  High conductivity copper bus bars for electrical distribution systems.
                </p>
                <Button variant="outline" className="w-full border-copper-500 text-copper-600 hover:bg-copper-50" asChild>
                  <Link to="/products#busbars">View Details</Link>
                </Button>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white rounded-lg overflow-hidden hover-scale card-shadow">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-copper-600 h-full w-full opacity-20"></div>
                  <span className="text-xl font-semibold text-white z-10">Transformers</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Transformers</h3>
                <p className="text-gray-600 mb-4">
                  Efficient and reliable copper transformers for various applications.
                </p>
                <Button variant="outline" className="w-full border-copper-500 text-copper-600 hover:bg-copper-50" asChild>
                  <Link to="/products#transformers">View Details</Link>
                </Button>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="bg-white rounded-lg overflow-hidden hover-scale card-shadow">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-copper-600 h-full w-full opacity-20"></div>
                  <span className="text-xl font-semibold text-white z-10">Conductive Wire</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Conductive Wire</h3>
                <p className="text-gray-600 mb-4">
                  Premium copper wire solutions for electrical and industrial use.
                </p>
                <Button variant="outline" className="w-full border-copper-500 text-copper-600 hover:bg-copper-50" asChild>
                  <Link to="/products#wire">View Details</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-copper-600 hover:bg-copper-700 px-8 py-6 text-lg" asChild>
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-steel-800 text-white section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Premium Copper Solutions?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team today to discuss your specific requirements and get a customized quote.
            </p>
            <Button className="bg-copper-500 hover:bg-copper-600 text-white px-8 py-6 text-lg" asChild>
              <Link to="/contact">
                Request a Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
