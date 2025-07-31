
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Server, DollarSign, Activity, Briefcase, Settings, Trash2, Edit, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Admin = () => {
  const [serverStats, setServerStats] = useState({
    totalUsers: 128,
    activeServers: 96,
    monthlyRevenue: 4256,
    serverLoad: 68
  });
  
  const [users, setUsers] = useState([
    { id: 1, name: "John Smith", email: "john@example.com", plan: "Business", status: "Active", created: "2023-04-30" },
    { id: 2, name: "Alice Johnson", email: "alice@example.com", plan: "Pro", status: "Active", created: "2023-04-29" },
    { id: 3, name: "Robert Williams", email: "robert@example.com", plan: "Starter", status: "Suspended", created: "2023-04-28" },
  ]);

  const [servers, setServers] = useState([
    { id: 1, name: "Web Server 01", ip: "192.168.1.100", status: "Online", cpu: 45, memory: 68, uptime: "99.9%" },
    { id: 2, name: "Database Server", ip: "192.168.1.101", status: "Online", cpu: 72, memory: 85, uptime: "99.8%" },
    { id: 3, name: "Mail Server", ip: "192.168.1.102", status: "Offline", cpu: 0, memory: 0, uptime: "98.5%" },
  ]);

  const [jobs, setJobs] = useState([
    { id: 1, title: "Senior Developer", department: "Engineering", location: "Auckland", status: "Active", posted: "2023-04-25" },
    { id: 2, title: "Customer Support", department: "Support", location: "Wellington", status: "Active", posted: "2023-04-20" },
    { id: 3, title: "Sales Manager", department: "Sales", location: "Christchurch", status: "Closed", posted: "2023-04-15" },
  ]);

  const [billing, setBilling] = useState([
    { id: 1, customer: "John Smith", amount: "$49.99", plan: "Business", status: "Paid", date: "2023-04-30" },
    { id: 2, customer: "Alice Johnson", amount: "$29.99", plan: "Pro", status: "Pending", date: "2023-04-29" },
    { id: 3, customer: "Robert Williams", amount: "$19.99", plan: "Starter", status: "Overdue", date: "2023-04-28" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        {/* Stats Overview */}
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
            <Briefcase className="h-8 w-8 text-secondary mb-2" />
            <h3 className="font-semibold">Active Jobs</h3>
            <p className="text-2xl font-bold">{jobs.filter(j => j.status === 'Active').length}</p>
          </Card>
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="servers">Servers</TabsTrigger>
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          {/* Users Management */}
          <TabsContent value="users" className="mt-6">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">User Management</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button><Plus className="h-4 w-4 mr-2" />Add User</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New User</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label>Name</Label>
                        <Input placeholder="Enter user name" />
                      </div>
                      <div className="grid gap-2">
                        <Label>Email</Label>
                        <Input type="email" placeholder="Enter email address" />
                      </div>
                      <div className="grid gap-2">
                        <Label>Plan</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select plan" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="starter">Starter</SelectItem>
                            <SelectItem value="pro">Pro</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button>Create User</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-2">Name</th>
                      <th className="text-left pb-2">Email</th>
                      <th className="text-left pb-2">Plan</th>
                      <th className="text-left pb-2">Status</th>
                      <th className="text-left pb-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.id} className="border-b">
                        <td className="py-3">{user.name}</td>
                        <td className="py-3">{user.email}</td>
                        <td className="py-3">{user.plan}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="py-3">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm"><Edit className="h-3 w-3" /></Button>
                            <Button variant="outline" size="sm"><Trash2 className="h-3 w-3" /></Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Servers Management */}
          <TabsContent value="servers" className="mt-6">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Server Management</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button><Plus className="h-4 w-4 mr-2" />Add Server</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Server</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label>Server Name</Label>
                        <Input placeholder="Enter server name" />
                      </div>
                      <div className="grid gap-2">
                        <Label>IP Address</Label>
                        <Input placeholder="Enter IP address" />
                      </div>
                      <div className="grid gap-2">
                        <Label>Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select server type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web">Web Server</SelectItem>
                            <SelectItem value="database">Database Server</SelectItem>
                            <SelectItem value="mail">Mail Server</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button>Create Server</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-2">Name</th>
                      <th className="text-left pb-2">IP Address</th>
                      <th className="text-left pb-2">Status</th>
                      <th className="text-left pb-2">CPU</th>
                      <th className="text-left pb-2">Memory</th>
                      <th className="text-left pb-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {servers.map(server => (
                      <tr key={server.id} className="border-b">
                        <td className="py-3">{server.name}</td>
                        <td className="py-3">{server.ip}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${server.status === 'Online' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {server.status}
                          </span>
                        </td>
                        <td className="py-3">{server.cpu}%</td>
                        <td className="py-3">{server.memory}%</td>
                        <td className="py-3">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm"><Settings className="h-3 w-3" /></Button>
                            <Button variant="outline" size="sm"><Trash2 className="h-3 w-3" /></Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Jobs Management */}
          <TabsContent value="jobs" className="mt-6">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Job Postings Management</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button><Plus className="h-4 w-4 mr-2" />Post Job</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create Job Posting</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label>Job Title</Label>
                        <Input placeholder="Enter job title" />
                      </div>
                      <div className="grid gap-2">
                        <Label>Department</Label>
                        <Input placeholder="Enter department" />
                      </div>
                      <div className="grid gap-2">
                        <Label>Location</Label>
                        <Input placeholder="Enter location" />
                      </div>
                      <div className="grid gap-2">
                        <Label>Description</Label>
                        <Textarea placeholder="Enter job description" />
                      </div>
                      <Button>Create Job</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-2">Title</th>
                      <th className="text-left pb-2">Department</th>
                      <th className="text-left pb-2">Location</th>
                      <th className="text-left pb-2">Status</th>
                      <th className="text-left pb-2">Posted</th>
                      <th className="text-left pb-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map(job => (
                      <tr key={job.id} className="border-b">
                        <td className="py-3">{job.title}</td>
                        <td className="py-3">{job.department}</td>
                        <td className="py-3">{job.location}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {job.status}
                          </span>
                        </td>
                        <td className="py-3">{job.posted}</td>
                        <td className="py-3">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm"><Edit className="h-3 w-3" /></Button>
                            <Button variant="outline" size="sm"><Trash2 className="h-3 w-3" /></Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Billing Management */}
          <TabsContent value="billing" className="mt-6">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Billing Management</h2>
                <Button><Plus className="h-4 w-4 mr-2" />Generate Invoice</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-2">Customer</th>
                      <th className="text-left pb-2">Amount</th>
                      <th className="text-left pb-2">Plan</th>
                      <th className="text-left pb-2">Status</th>
                      <th className="text-left pb-2">Date</th>
                      <th className="text-left pb-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billing.map(bill => (
                      <tr key={bill.id} className="border-b">
                        <td className="py-3">{bill.customer}</td>
                        <td className="py-3">{bill.amount}</td>
                        <td className="py-3">{bill.plan}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            bill.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                            bill.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'
                          }`}>
                            {bill.status}
                          </span>
                        </td>
                        <td className="py-3">{bill.date}</td>
                        <td className="py-3">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button variant="outline" size="sm">Send</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
