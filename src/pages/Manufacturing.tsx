
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Factory, 
  Shield, 
  Search, 
  Scissors, 
  Package, 
  Truck,
  ChevronRight
} from 'lucide-react';

const Manufacturing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-steel-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Our Manufacturing Process
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover how we transform raw copper into precision-engineered products with our state-of-the-art manufacturing capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Production Workflow</h2>
            
            <div className="relative">
              {/* Process Steps */}
              <div className="hidden md:block absolute left-1/2 -ml-0.5 w-1 h-full bg-copper-200"></div>
              
              <div className="space-y-12 relative">
                {/* Step 1 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <div className="flex md:justify-end mb-4">
                        <div className="bg-copper-100 p-3 rounded-full">
                          <Search className="h-6 w-6 text-copper-600" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Material Selection</h3>
                      <p className="text-gray-600">
                        We source only the highest quality copper materials, testing for purity and conductivity to ensure premium starting materials.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-start">
                    <div className="bg-copper-500 rounded-full h-8 w-8 mt-6 -ml-4 z-10 flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="hidden md:flex justify-end">
                    <div className="bg-copper-500 rounded-full h-8 w-8 mt-6 -mr-4 z-10 flex items-center justify-center">
                      <span className="text-white font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <div className="flex mb-4">
                        <div className="bg-copper-100 p-3 rounded-full">
                          <Scissors className="h-6 w-6 text-copper-600" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Precision Cutting & Forming</h3>
                      <p className="text-gray-600">
                        Using advanced CNC machines and specialized tools, we cut and form copper with extraordinary precision to meet exact specifications.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <div className="flex md:justify-end mb-4">
                        <div className="bg-copper-100 p-3 rounded-full">
                          <Factory className="h-6 w-6 text-copper-600" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Assembly & Finishing</h3>
                      <p className="text-gray-600">
                        Our skilled technicians assemble and finish components, applying specialized coatings or treatments as required for optimal performance.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-start">
                    <div className="bg-copper-500 rounded-full h-8 w-8 mt-6 -ml-4 z-10 flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
                    </div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="hidden md:flex justify-end">
                    <div className="bg-copper-500 rounded-full h-8 w-8 mt-6 -mr-4 z-10 flex items-center justify-center">
                      <span className="text-white font-bold">4</span>
                    </div>
                  </div>
                  <div>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <div className="flex mb-4">
                        <div className="bg-copper-100 p-3 rounded-full">
                          <Shield className="h-6 w-6 text-copper-600" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                      <p className="text-gray-600">
                        Every product undergoes comprehensive testing and inspection, ensuring it meets our strict quality standards before approval.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <div className="flex md:justify-end mb-4">
                        <div className="bg-copper-100 p-3 rounded-full">
                          <Package className="h-6 w-6 text-copper-600" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Packaging</h3>
                      <p className="text-gray-600">
                        Products are carefully packaged to prevent damage during transit, using industry-leading materials and methods.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-start">
                    <div className="bg-copper-500 rounded-full h-8 w-8 mt-6 -ml-4 z-10 flex items-center justify-center">
                      <span className="text-white font-bold">5</span>
                    </div>
                  </div>
                </div>
                
                {/* Step 6 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="hidden md:flex justify-end">
                    <div className="bg-copper-500 rounded-full h-8 w-8 mt-6 -mr-4 z-10 flex items-center justify-center">
                      <span className="text-white font-bold">6</span>
                    </div>
                  </div>
                  <div>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <div className="flex mb-4">
                        <div className="bg-copper-100 p-3 rounded-full">
                          <Truck className="h-6 w-6 text-copper-600" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Delivery</h3>
                      <p className="text-gray-600">
                        With our efficient logistics network, we ensure timely delivery of your products to any location worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              State-of-the-Art Manufacturing Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our modern facilities are equipped with the latest technology to ensure precision and efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Facility Image 1 */}
            <div className="bg-gray-200 h-80 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-copper-600 h-full w-full opacity-20"></div>
                <div className="z-10 text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Production Floor</h3>
                  <p className="text-white">Advanced machinery and robotics for precision manufacturing</p>
                </div>
              </div>
            </div>
            
            {/* Facility Image 2 */}
            <div className="bg-gray-200 h-80 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-copper-600 h-full w-full opacity-20"></div>
                <div className="z-10 text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Testing Laboratory</h3>
                  <p className="text-white">Comprehensive quality control and product testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Quality Standards
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-copper-600" />
                  ISO 9001 Certified
                </h3>
                <p className="text-gray-600">
                  Our manufacturing processes adhere to the highest international quality management standards, ensuring consistent quality across all products.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-copper-600" />
                  RoHS Compliant
                </h3>
                <p className="text-gray-600">
                  All our products comply with Restriction of Hazardous Substances directives, making them environmentally friendly and safe.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-copper-600" />
                  UL Listed
                </h3>
                <p className="text-gray-600">
                  Many of our products have undergone rigorous UL testing and certification, meeting safety standards for North American markets.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-copper-600" />
                  ASTM Standards
                </h3>
                <p className="text-gray-600">
                  Our copper products meet or exceed ASTM B187/B187M standards for conductivity, tensile strength, and material consistency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-copper-700 text-white section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to See Our Facilities in Action?</h2>
            <p className="text-xl text-copper-100 mb-8">
              Schedule a facility tour or request a detailed manufacturing capability report.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-copper-700 hover:bg-gray-100 hover:text-copper-800 px-6 py-6 text-lg" asChild>
                <Link to="/contact">
                  Schedule a Tour <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 text-lg">
                Request Capabilities Report
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Manufacturing;
