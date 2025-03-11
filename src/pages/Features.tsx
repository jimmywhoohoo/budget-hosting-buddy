
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Server, Shield, Zap, Globe, Clock, Lock } from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl font-bold text-center mb-12">Our Features</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <Server className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">High-Performance Servers</h3>
            <p className="text-gray-600">Enterprise-grade hardware powered by Vultr's infrastructure.</p>
          </Card>
          <Card className="p-6">
            <Shield className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
            <p className="text-gray-600">DDoS protection and SSL certificates included at no extra cost.</p>
          </Card>
          <Card className="p-6">
            <Zap className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Deployment</h3>
            <p className="text-gray-600">Deploy your website in seconds with our automated system.</p>
          </Card>
          <Card className="p-6">
            <Globe className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global CDN</h3>
            <p className="text-gray-600">Lightning-fast content delivery through our worldwide network.</p>
          </Card>
          <Card className="p-6">
            <Clock className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">99.9% Uptime</h3>
            <p className="text-gray-600">Guaranteed server availability with enterprise reliability.</p>
          </Card>
          <Card className="p-6">
            <Lock className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Daily Backups</h3>
            <p className="text-gray-600">Automatic daily backups to keep your data safe and secure.</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;
