
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Download, Info, ChevronRight, Check } from 'lucide-react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('all');

  const products = [
    {
      id: 'busbars',
      name: 'Copper Bus Bars',
      description: 'High conductivity copper bus bars for electrical distribution systems, power supplies, and switchgear applications.',
      features: [
        'Custom lengths and configurations',
        '99.9% pure electrolytic copper',
        'Silver or tin plating options',
        'High conductivity and current capacity',
        'Thermal stability and resistance to corrosion'
      ],
      applications: [
        'Power distribution systems',
        'Switchgear assemblies',
        'Industrial electrical systems',
        'Transformers and generators'
      ]
    },
    {
      id: 'transformers',
      name: 'Transformers',
      description: 'Efficient and reliable copper transformers designed for optimal performance in various electrical applications.',
      features: [
        'High-grade copper windings',
        'Low energy loss design',
        'Various voltage ratio configurations',
        'Thermal management systems',
        'Extended service life'
      ],
      applications: [
        'Power distribution networks',
        'Renewable energy systems',
        'Industrial machinery',
        'Commercial building infrastructure'
      ]
    },
    {
      id: 'rods',
      name: 'Vending & Normal Rods',
      description: 'Precision manufactured copper rods for various industrial and commercial applications.',
      features: [
        'Customizable diameters and lengths',
        'High purity copper composition',
        'Precision machined tolerances',
        'Available in various alloy options',
        'Excellent thermal conductivity'
      ],
      applications: [
        'Vending machines',
        'Electrical equipment',
        'Conductive applications',
        'Heat exchange systems'
      ]
    },
    {
      id: 'wire',
      name: 'Conductive Wire',
      description: 'Premium copper wire solutions for electrical and industrial applications with superior conductivity.',
      features: [
        'Multiple gauge options',
        'Insulated and bare variants',
        'High flexibility and tensile strength',
        'Custom spooling options',
        'Resistant to environmental factors'
      ],
      applications: [
        'Electrical installations',
        'Motors and generators',
        'Telecommunications equipment',
        'Automotive applications'
      ]
    },
    {
      id: 'custom',
      name: 'Custom Solutions',
      description: 'Bespoke copper components manufactured to your exact specifications and requirements.',
      features: [
        'Custom design consultation',
        'Prototype development',
        'Precision manufacturing',
        'Quality assurance testing',
        'Flexible production quantities'
      ],
      applications: [
        'Specialized industrial equipment',
        'Unique electrical systems',
        'OEM components',
        'Research and development projects'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-copper-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Our Product Range
            </h1>
            <p className="text-xl text-copper-100 mb-8">
              Discover our comprehensive range of high-quality copper products manufactured with precision and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Products Navigation */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full max-w-4xl mx-auto flex flex-wrap justify-between bg-transparent h-auto">
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:bg-copper-50 data-[state=active]:text-copper-700 data-[state=active]:border-b-2 data-[state=active]:border-copper-600 rounded-none px-6"
              >
                All Products
              </TabsTrigger>
              <TabsTrigger 
                value="busbars" 
                className="data-[state=active]:bg-copper-50 data-[state=active]:text-copper-700 data-[state=active]:border-b-2 data-[state=active]:border-copper-600 rounded-none px-6"
              >
                Bus Bars
              </TabsTrigger>
              <TabsTrigger 
                value="transformers" 
                className="data-[state=active]:bg-copper-50 data-[state=active]:text-copper-700 data-[state=active]:border-b-2 data-[state=active]:border-copper-600 rounded-none px-6"
              >
                Transformers
              </TabsTrigger>
              <TabsTrigger 
                value="rods" 
                className="data-[state=active]:bg-copper-50 data-[state=active]:text-copper-700 data-[state=active]:border-b-2 data-[state=active]:border-copper-600 rounded-none px-6"
              >
                Rods
              </TabsTrigger>
              <TabsTrigger 
                value="wire" 
                className="data-[state=active]:bg-copper-50 data-[state=active]:text-copper-700 data-[state=active]:border-b-2 data-[state=active]:border-copper-600 rounded-none px-6"
              >
                Wire
              </TabsTrigger>
              <TabsTrigger 
                value="custom" 
                className="data-[state=active]:bg-copper-50 data-[state=active]:text-copper-700 data-[state=active]:border-b-2 data-[state=active]:border-copper-600 rounded-none px-6"
              >
                Custom
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Products Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" value={activeTab} className="w-full">
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div key={product.id} id={product.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover-scale card-shadow">
                    <div className="h-48 bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-copper-600 h-full w-full opacity-20"></div>
                        <span className="text-xl font-semibold text-white z-10">{product.name}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <Button variant="outline" className="mt-4 w-full border-copper-500 text-copper-600 hover:bg-copper-50" asChild>
                        <a href={`#${product.id}-detail`} onClick={() => setActiveTab(product.id)}>
                          View Details <ChevronRight className="ml-1 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {products.map((product) => (
              <TabsContent key={product.id} value={product.id}>
                <div id={`${product.id}-detail`} className="max-w-5xl mx-auto">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                    <div className="h-64 bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-copper-600 h-full w-full opacity-20"></div>
                        <h2 className="text-3xl font-bold text-white z-10">{product.name}</h2>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="prose max-w-none">
                        <p className="text-lg text-gray-700 mb-6">
                          {product.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                          <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                              <Info className="mr-2 h-5 w-5 text-copper-600" /> Features
                            </h3>
                            <ul className="space-y-2">
                              {product.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <Check className="mr-2 h-5 w-5 text-copper-600 mt-0.5 shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-semibold mb-4">Applications</h3>
                            <ul className="space-y-2">
                              {product.applications.map((application, index) => (
                                <li key={index} className="flex items-start">
                                  <Check className="mr-2 h-5 w-5 text-copper-600 mt-0.5 shrink-0" />
                                  <span>{application}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                          <Button className="bg-copper-600 hover:bg-copper-700">
                            Request a Quote
                          </Button>
                          <Button variant="outline" className="border-copper-500 text-copper-600 hover:bg-copper-50">
                            <Download className="mr-2 h-5 w-5" /> Download Specifications
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-steel-800 text-white section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Copper Solutions?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our engineering team can develop bespoke copper products tailored to your unique specifications.
            </p>
            <Button className="bg-copper-500 hover:bg-copper-600 text-white px-8 py-6 text-lg" asChild>
              <Link to="/contact">
                Contact Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
