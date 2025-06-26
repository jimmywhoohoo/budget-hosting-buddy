
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Radio, Server, Volume } from "lucide-react";

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
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Choose the perfect hosting solution for your needs with our affordable NZ-based plans. All plans include 24/7 support and a 99.9% uptime guarantee.</p>
        
        {/* Basic Web Hosting Plans */}
        <h2 className="text-2xl font-semibold text-center mb-8">NZ Web Hosting</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {/* $1 Plan */}
          <Card className="p-6 border-dashed border-gray-300">
            <Badge className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-100">Basic</Badge>
            <h3 className="text-xl font-semibold mb-2">Mini Kiwi</h3>
            <div className="text-3xl font-bold mb-4">$1<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 4GB Storage</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Unlimited Bandwidth</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 1 Website</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Free SSL & NZ Support</li>
            </ul>
            <Button 
              className="w-full" 
              onClick={() => handleGetStarted("Mini")}
            >
              Get Started
            </Button>
          </Card>

          <Card className="p-6">
            <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-100">Popular</Badge>
            <h3 className="text-xl font-semibold mb-2">Starter Buzzy</h3>
            <div className="text-3xl font-bold mb-4">$2.99<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 25GB SSD Storage</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Unlimited Bandwidth</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 5 Websites</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> NZ Data Centre</li>
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
              Best Value
            </div>
            <Badge className="mb-2 bg-orange-100 text-orange-800 hover:bg-orange-100">Pro</Badge>
            <h3 className="text-xl font-semibold mb-2">Pro Tui</h3>
            <div className="text-3xl font-bold mb-4">$5.99<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 50GB SSD Storage</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Unlimited Bandwidth</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Unlimited Websites</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Priority NZ Support</li>
            </ul>
            <Button 
              className="w-full bg-secondary hover:bg-secondary/90" 
              onClick={() => handleGetStarted("Pro")}
            >
              Get Started
            </Button>
          </Card>

          <Card className="p-6">
            <Badge className="mb-2 bg-purple-100 text-purple-800 hover:bg-purple-100">Business</Badge>
            <h3 className="text-xl font-semibold mb-2">Business Kakapo</h3>
            <div className="text-3xl font-bold mb-4">$9.99<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 100GB SSD Storage</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Unlimited Bandwidth</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Unlimited Websites</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Premium NZ Support</li>
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
        <h2 className="text-2xl font-semibold text-center mb-8">NZ WordPress Hosting</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <Card className="p-6 border-dashed border-gray-300">
            <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-100">WordPress</Badge>
            <h3 className="text-xl font-semibold mb-2">WP Piwakawaka</h3>
            <div className="text-3xl font-bold mb-4">$1<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 10GB SSD Storage</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Unlimited Bandwidth</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 1 WordPress Site</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> NZ WordPress Themes</li>
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
            <h3 className="text-xl font-semibold mb-2">WP Kea</h3>
            <div className="text-3xl font-bold mb-4">$7.99<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 20GB SSD Storage</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Unlimited Bandwidth</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 3 WordPress Sites</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Premium NZ Themes</li>
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
            <h3 className="text-xl font-semibold mb-2">WP Huia</h3>
            <div className="text-3xl font-bold mb-4">$12.99<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 40GB SSD Storage</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Unlimited Bandwidth</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 10 WordPress Sites</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> WooCommerce + NZ Support</li>
            </ul>
            <Button 
              className="w-full" 
              onClick={() => handleGetStarted("WP_Pro")}
            >
              Get Started
            </Button>
          </Card>
        </div>

        {/* ShoutCast & IceCast Server Plans */}
        <h2 className="text-2xl font-semibold text-center mb-8">NZ Streaming Server Hosting</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* ShoutCast Plans */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center">ShoutCast Servers</h3>
            <Card className="p-6 border-dashed border-gray-300">
              <div className="flex items-center mb-4">
                <Radio className="h-5 w-5 text-secondary mr-2" />
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">ShoutCast</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kiwi Stream</h3>
              <div className="text-3xl font-bold mb-4">$4.99<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 128 kbps Quality</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 50 Listeners</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Unlimited Bandwidth</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> NZ AutoDJ Support</li>
              </ul>
              <Button 
                className="w-full" 
                onClick={() => handleGetStarted("ShoutCast_Basic")}
              >
                Get Started
              </Button>
            </Card>

            <Card className="p-6 border-secondary relative overflow-hidden">
              <div className="absolute -right-8 -top-8 bg-secondary text-white rotate-45 px-10 py-1 text-xs font-medium">
                Popular
              </div>
              <div className="flex items-center mb-4">
                <Radio className="h-5 w-5 text-secondary mr-2" />
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">ShoutCast</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tui Stream Pro</h3>
              <div className="text-3xl font-bold mb-4">$9.99<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 320 kbps Quality</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 200 Listeners</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Unlimited Bandwidth</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> NZ Mobile Apps</li>
              </ul>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90" 
                onClick={() => handleGetStarted("ShoutCast_Pro")}
              >
                Get Started
              </Button>
            </Card>
          </div>

          {/* IceCast Plans */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center">IceCast Servers</h3>
            <Card className="p-6 border-dashed border-gray-300">
              <div className="flex items-center mb-4">
                <Server className="h-5 w-5 text-secondary mr-2" />
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">IceCast</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fantail Stream</h3>
              <div className="text-3xl font-bold mb-4">$4.99<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 128 kbps Quality</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 50 Listeners</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Unlimited Bandwidth</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> NZ HTML5 Player</li>
              </ul>
              <Button 
                className="w-full" 
                onClick={() => handleGetStarted("IceCast_Basic")}
              >
                Get Started
              </Button>
            </Card>

            <Card className="p-6 border-secondary relative overflow-hidden">
              <div className="absolute -right-8 -top-8 bg-secondary text-white rotate-45 px-10 py-1 text-xs font-medium">
                Popular
              </div>
              <div className="flex items-center mb-4">
                <Server className="h-5 w-5 text-secondary mr-2" />
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">IceCast</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-2">Moa Stream Pro</h3>
              <div className="text-3xl font-bold mb-4">$9.99<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 320 kbps Quality</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 200 Listeners</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Unlimited Bandwidth</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Custom NZ Branding</li>
              </ul>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90" 
                onClick={() => handleGetStarted("IceCast_Pro")}
              >
                Get Started
              </Button>
            </Card>
          </div>
        </div>

        {/* FAQ or CTA section could go here */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-4">Need a custom NZ solution?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact our NZ-based sales team for enterprise-grade hosting solutions tailored to your specific requirements.
          </p>
          <Button variant="outline" onClick={() => navigate("/contact")}>
            Contact NZ Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
