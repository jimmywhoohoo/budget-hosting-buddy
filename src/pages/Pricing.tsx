
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const navigate = useNavigate();

  const handleGetStarted = (plan: string) => {
    // Navigate to payment page with the selected plan
    navigate("/payment", { state: { plan } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-20 pb-20">
        <h1 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Choose the perfect hosting solution for your needs with our affordable plans. All plans include 24/7 support and a 99.9% uptime guarantee.</p>
        
        {/* Basic Web Hosting Plans */}
        <h2 className="text-2xl font-semibold text-center mb-8">Web Hosting</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {/* $1 Plan */}
          <Card className="p-6 border-dashed border-gray-300">
            <Badge className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-100">Basic</Badge>
            <h3 className="text-xl font-semibold mb-2">Mini</h3>
            <div className="text-3xl font-bold mb-4">$1<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 500MB Storage</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 1GB Bandwidth</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 1 Website</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Free SSL</li>
            </ul>
            <Button 
              className="w-full" 
              onClick={() => handleGetStarted("Mini")}
            >
              Get Started
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <div className="text-3xl font-bold mb-4">$2.99<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 1GB RAM</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 1 CPU Core</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 25GB SSD Storage</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 1TB Bandwidth</li>
            </ul>
            <Button 
              className="w-full" 
              onClick={() => handleGetStarted("Starter")}
            >
              Get Started
            </Button>
          </Card>
          
          <Card className="p-6 border-secondary relative overflow-hidden">
            <div className="absolute -right-8 -top-8 bg-secondary text-white rotate-45 px-10 py-1 text-xs font-medium">
              Popular
            </div>
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <div className="text-3xl font-bold mb-4">$5.99<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 2GB RAM</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 2 CPU Cores</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 50GB SSD Storage</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 2TB Bandwidth</li>
            </ul>
            <Button 
              className="w-full bg-secondary hover:bg-secondary/90" 
              onClick={() => handleGetStarted("Pro")}
            >
              Get Started
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Business</h3>
            <div className="text-3xl font-bold mb-4">$9.99<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 4GB RAM</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 4 CPU Cores</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 100GB SSD Storage</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 4TB Bandwidth</li>
            </ul>
            <Button 
              className="w-full" 
              onClick={() => handleGetStarted("Business")}
            >
              Get Started
            </Button>
          </Card>
        </div>

        {/* WordPress Hosting Plans */}
        <h2 className="text-2xl font-semibold text-center mb-8">WordPress Hosting</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6">
            <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-100">WordPress</Badge>
            <h3 className="text-xl font-semibold mb-2">WP Basic</h3>
            <div className="text-3xl font-bold mb-4">$4.99<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 10GB SSD Storage</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 1 WordPress Site</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Free WordPress Themes</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Auto WordPress Updates</li>
            </ul>
            <Button 
              className="w-full" 
              onClick={() => handleGetStarted("WP_Basic")}
            >
              Get Started
            </Button>
          </Card>

          <Card className="p-6 border-secondary relative overflow-hidden">
            <div className="absolute -right-8 -top-8 bg-secondary text-white rotate-45 px-10 py-1 text-xs font-medium">
              Popular
            </div>
            <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-100">WordPress</Badge>
            <h3 className="text-xl font-semibold mb-2">WP Plus</h3>
            <div className="text-3xl font-bold mb-4">$7.99<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 20GB SSD Storage</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 3 WordPress Sites</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Premium WP Themes</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Automated Backups</li>
            </ul>
            <Button 
              className="w-full bg-secondary hover:bg-secondary/90" 
              onClick={() => handleGetStarted("WP_Plus")}
            >
              Get Started
            </Button>
          </Card>

          <Card className="p-6">
            <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-100">WordPress</Badge>
            <h3 className="text-xl font-semibold mb-2">WP Pro</h3>
            <div className="text-3xl font-bold mb-4">$12.99<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 40GB SSD Storage</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 10 WordPress Sites</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> WooCommerce Support</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Staging Environment</li>
            </ul>
            <Button 
              className="w-full" 
              onClick={() => handleGetStarted("WP_Pro")}
            >
              Get Started
            </Button>
          </Card>
        </div>

        {/* FAQ or CTA section could go here */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-4">Need a custom solution?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact our sales team for enterprise-grade hosting solutions tailored to your specific requirements.
          </p>
          <Button variant="outline" onClick={() => navigate("/contact")}>
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
