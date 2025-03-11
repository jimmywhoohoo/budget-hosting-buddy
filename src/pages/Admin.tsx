
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Server, DollarSign, Activity } from "lucide-react";

const Admin = () => {
  const [serverStats, setServerStats] = useState({
    totalUsers: 128,
    activeServers: 96,
    monthlyRevenue: 4256,
    serverLoad: 68
  });
  
  const recentUsers = [
    { id: 1, name: "John Smith", plan: "Business", date: "2023-04-30" },
    { id: 2, name: "Alice Johnson", plan: "Pro", date: "2023-04-29" },
    { id: 3, name: "Robert Williams", plan: "Starter", date: "2023-04-28" },
    { id: 4, name: "Emma Brown", plan: "Pro", date: "2023-04-27" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 flex flex-col items-center">
            <Users className="h-8 w-8 text-secondary mb-2" />
            <h3 className="font-semibold">Total Users</h3>
            <p className="text-2xl font-bold">{serverStats.totalUsers}</p>
          </Card>
          <Card className="p-4 flex flex-col items-center">
            <Server className="h-8 w-8 text-secondary mb-2" />
            <h3 className="font-semibold">Active Servers</h3>
            <p className="text-2xl font-bold">{serverStats.activeServers}</p>
          </Card>
          <Card className="p-4 flex flex-col items-center">
            <DollarSign className="h-8 w-8 text-secondary mb-2" />
            <h3 className="font-semibold">Monthly Revenue</h3>
            <p className="text-2xl font-bold">${serverStats.monthlyRevenue}</p>
          </Card>
          <Card className="p-4 flex flex-col items-center">
            <Activity className="h-8 w-8 text-secondary mb-2" />
            <h3 className="font-semibold">Server Load</h3>
            <p className="text-2xl font-bold">{serverStats.serverLoad}%</p>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-2">Name</th>
                      <th className="text-left pb-2">Plan</th>
                      <th className="text-left pb-2">Date</th>
                      <th className="text-left pb-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map(user => (
                      <tr key={user.id} className="border-b">
                        <td className="py-3">{user.name}</td>
                        <td className="py-3">{user.plan}</td>
                        <td className="py-3">{user.date}</td>
                        <td className="py-3">
                          <Button variant="outline" size="sm">View</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <Button variant="outline" className="w-full">View All Users</Button>
              </div>
            </Card>
          </div>
          
          <div>
            <Card className="p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">System Status</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">CPU Usage</span>
                    <span className="text-sm font-medium">72%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: "72%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Memory Usage</span>
                    <span className="text-sm font-medium">64%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: "64%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Disk Usage</span>
                    <span className="text-sm font-medium">48%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: "48%" }}></div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <Button className="w-full">Add New User</Button>
                <Button variant="outline" className="w-full">Server Maintenance</Button>
                <Button variant="outline" className="w-full">Run Diagnostics</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
