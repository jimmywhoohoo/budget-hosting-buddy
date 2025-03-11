
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Server, CloudCog, BarChart, Settings } from "lucide-react";

const Client = () => {
  const [activeServer, setActiveServer] = useState({
    name: "my-website-1",
    status: "running",
    cpu: "1 Core",
    ram: "1GB",
    storage: "25GB",
    bandwidth: "1TB"
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-3xl font-bold mb-8">Client Dashboard</h1>
        
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 flex flex-col items-center">
            <Server className="h-8 w-8 text-secondary mb-2" />
            <h3 className="font-semibold">Active Servers</h3>
            <p className="text-2xl font-bold">1</p>
          </Card>
          <Card className="p-4 flex flex-col items-center">
            <CloudCog className="h-8 w-8 text-secondary mb-2" />
            <h3 className="font-semibold">Resources</h3>
            <p className="text-2xl font-bold">25%</p>
          </Card>
          <Card className="p-4 flex flex-col items-center">
            <BarChart className="h-8 w-8 text-secondary mb-2" />
            <h3 className="font-semibold">Bandwidth</h3>
            <p className="text-2xl font-bold">128GB</p>
          </Card>
          <Card className="p-4 flex flex-col items-center">
            <Settings className="h-8 w-8 text-secondary mb-2" />
            <h3 className="font-semibold">Plan</h3>
            <p className="text-lg font-bold">Starter</p>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Your Servers</h2>
              <div className="border rounded-md p-4 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{activeServer.name}</h3>
                    <p className="text-sm text-gray-500">Status: <span className="text-green-500">Running</span></p>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
                <div className="grid grid-cols-4 gap-2 mt-4">
                  <div className="text-sm">
                    <p className="text-gray-500">CPU</p>
                    <p>{activeServer.cpu}</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-500">RAM</p>
                    <p>{activeServer.ram}</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-500">Storage</p>
                    <p>{activeServer.storage}</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-500">Bandwidth</p>
                    <p>{activeServer.bandwidth}</p>
                  </div>
                </div>
              </div>
              <Button className="w-full">Deploy New Server</Button>
            </Card>
          </div>
          
          <div>
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Current Plan</p>
                  <p className="font-medium">Starter - $2.99/month</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Next Billing Date</p>
                  <p className="font-medium">May 15, 2024</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Method</p>
                  <p className="font-medium">**** **** **** 4242</p>
                </div>
              </div>
              <div className="border-t mt-4 pt-4">
                <Button variant="outline" className="w-full">Upgrade Plan</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
