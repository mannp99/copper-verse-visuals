
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll respond shortly.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-copper-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl text-copper-100">
              Get in touch with our team for inquiries, quotes, or to discuss your copper manufacturing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-copper-100 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-copper-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Address</h3>
                      <p className="text-gray-600">
                        123 Industrial Lane<br />
                        Business Park<br />
                        Manufacturing City, MC 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-copper-100 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-copper-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Phone</h3>
                      <p className="text-gray-600">
                        Main: (123) 456-7890<br />
                        Sales: (123) 456-7891<br />
                        Support: (123) 456-7892
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-copper-100 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-copper-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <p className="text-gray-600">
                        General: info@coppercraft.com<br />
                        Sales: sales@coppercraft.com<br />
                        Support: support@coppercraft.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-copper-100 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-copper-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Map Placeholder */}
                <div className="mt-10 h-64 bg-gray-200 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-copper-600 h-full w-full opacity-20"></div>
                    <div className="z-10 text-center p-6">
                      <h3 className="text-xl font-bold text-white mb-2">Map Location</h3>
                      <p className="text-white">Interactive map would display here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Message subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message"
                      rows={6}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-copper-600 hover:bg-copper-700 font-medium py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Find quick answers to common questions about our copper manufacturing services
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">What is your minimum order quantity?</h3>
                <p className="text-gray-600">
                  Our minimum order quantities vary by product type. For standard items, we typically accept orders starting at 100 units, while custom products may require higher minimums. Contact our sales team for specific information.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Do you offer custom copper fabrication?</h3>
                <p className="text-gray-600">
                  Yes, we specialize in custom copper fabrication services. Our engineering team can work with your specifications to design and manufacture copper components tailored to your exact needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">What are your shipping and delivery timeframes?</h3>
                <p className="text-gray-600">
                  Standard products typically ship within 3-5 business days. Custom orders may take 2-4 weeks depending on complexity. We offer expedited manufacturing for time-sensitive projects at an additional cost.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Do you ship internationally?</h3>
                <p className="text-gray-600">
                  Yes, we ship our copper products worldwide. International shipping times and costs vary by destination. Our logistics team can provide specific details based on your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-copper-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center">
              <CheckCircle className="h-12 w-12 mr-4 text-white" />
              <div>
                <h3 className="text-2xl font-bold">Ready to get started?</h3>
                <p className="text-copper-100">Our team is ready to help with your copper manufacturing needs</p>
              </div>
            </div>
            <Button className="bg-white text-copper-700 hover:bg-gray-100 hover:text-copper-800 px-8 py-6 text-lg">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
