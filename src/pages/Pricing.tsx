
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h1>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <div className="text-3xl font-bold mb-4">$2.99<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 1GB RAM</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 1 CPU Core</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 25GB SSD Storage</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 1TB Bandwidth</li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </Card>
          <Card className="p-6 border-secondary">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <div className="text-3xl font-bold mb-4">$5.99<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 2GB RAM</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 2 CPU Cores</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 50GB SSD Storage</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> 2TB Bandwidth</li>
            </ul>
            <Button className="w-full bg-secondary hover:bg-secondary/90">Get Started</Button>
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
            <Button className="w-full">Get Started</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
