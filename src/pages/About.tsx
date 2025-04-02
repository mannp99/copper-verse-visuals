
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Users, ChevronRight, Target } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-copper-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              About CopperCraft
            </h1>
            <p className="text-xl text-copper-100 mb-8">
              For over three decades, we've been at the forefront of copper manufacturing, delivering precision-engineered solutions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Founded in 1985, CopperCraft began as a small workshop with a big vision: to become a leader in high-quality copper manufacturing. Today, we're proud to have grown into a global enterprise serving clients across multiple industries.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  What started with a team of five dedicated craftsmen has expanded to a workforce of over 200 skilled professionals, all committed to excellence in copper fabrication and innovation.
                </p>
                <p className="text-lg text-gray-600">
                  Through decades of consistent quality and reliability, we've built lasting relationships with our customers, many of whom have been with us since our earliest days.
                </p>
              </div>
              <div className="bg-gray-200 h-80 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-copper-600 h-full w-full opacity-20"></div>
                  <div className="z-10 text-center">
                    <p className="text-2xl font-bold text-white">Est. 1985</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Mission & Vision
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="flex justify-center mb-6">
                  <div className="bg-copper-100 p-4 rounded-full">
                    <Target className="h-10 w-10 text-copper-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Our Mission</h3>
                <p className="text-gray-600 text-center">
                  To deliver superior copper products that exceed customer expectations in quality, reliability, and performance, while maintaining the highest standards of craftsmanship and service.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="flex justify-center mb-6">
                  <div className="bg-copper-100 p-4 rounded-full">
                    <Award className="h-10 w-10 text-copper-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Our Vision</h3>
                <p className="text-gray-600 text-center">
                  To be the global leader in copper manufacturing, known for innovation, sustainability, and setting industry standards that drive the evolution of copper applications worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide every aspect of our business operations and relationships
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover-scale">
                <h3 className="text-xl font-semibold mb-3 text-copper-600">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every product we create and every service we deliver.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover-scale">
                <h3 className="text-xl font-semibold mb-3 text-copper-600">Integrity</h3>
                <p className="text-gray-600">
                  We conduct business with honesty, transparency, and ethical standards.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover-scale">
                <h3 className="text-xl font-semibold mb-3 text-copper-600">Innovation</h3>
                <p className="text-gray-600">
                  We continuously seek new ways to improve our products and processes.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover-scale">
                <h3 className="text-xl font-semibold mb-3 text-copper-600">Responsibility</h3>
                <p className="text-gray-600">
                  We are committed to sustainable practices and community engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the experienced professionals who guide our company's vision and operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover-scale">
                <div className="h-64 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-copper-600 h-full w-full opacity-20"></div>
                    <div className="z-10 flex items-center justify-center">
                      <Users className="h-16 w-16 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Robert Smith</h3>
                  <p className="text-copper-600 mb-4">Chief Executive Officer</p>
                  <p className="text-gray-600">
                    With over 25 years in copper manufacturing, Robert leads our company with vision and expertise.
                  </p>
                </div>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover-scale">
                <div className="h-64 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-copper-600 h-full w-full opacity-20"></div>
                    <div className="z-10 flex items-center justify-center">
                      <Users className="h-16 w-16 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                  <p className="text-copper-600 mb-4">Chief Operations Officer</p>
                  <p className="text-gray-600">
                    Sarah oversees our manufacturing operations, ensuring efficiency and quality across all processes.
                  </p>
                </div>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover-scale">
                <div className="h-64 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-copper-600 h-full w-full opacity-20"></div>
                    <div className="z-10 flex items-center justify-center">
                      <Users className="h-16 w-16 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
                  <p className="text-copper-600 mb-4">Chief Technology Officer</p>
                  <p className="text-gray-600">
                    Michael leads our R&D initiatives, pioneering innovative copper manufacturing technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-steel-800 text-white section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals to join our growing company. Explore opportunities to be part of our journey.
            </p>
            <Button className="bg-copper-500 hover:bg-copper-600 text-white px-8 py-6 text-lg" asChild>
              <Link to="/contact">
                View Career Opportunities <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
