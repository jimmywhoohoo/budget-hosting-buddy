
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { ArrowRight, Server, Shield, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            The Most Affordable Web Hosting Solution
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Deploy your website in seconds with our ultra-low-cost hosting powered by Vultr infrastructure.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Start Hosting <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-up">
            <Server className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast Servers</h3>
            <p className="text-gray-600">
              Powered by Vultr's high-performance infrastructure for optimal speed.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-up [animation-delay:200ms]">
            <Shield className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
            <p className="text-gray-600">
              Built-in DDoS protection and SSL certificates included.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-up [animation-delay:400ms]">
            <Zap className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">One-Click Deploy</h3>
            <p className="text-gray-600">
              Deploy your website with a single click, no technical expertise needed.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
