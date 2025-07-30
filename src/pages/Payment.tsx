
import Navbar from "@/components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Get selected plan from state or default to "Pro"
  const selectedPlan = location.state?.plan || "Pro";
  const planPrices = {
    "Starter": "$2.99",
    "Pro": "$5.99",
    "Business": "$9.99"
  };

  // Customer details state
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    domain: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = () => {
    // Validate form
    const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'state', 'zip', 'domain'];
    const missingFields = requiredFields.filter(field => !customerDetails[field]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerDetails.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsProcessing(true);
    
    // WARNING: This is a demo implementation only!
    // In production, you MUST:
    // 1. Use a secure payment processor (Stripe, PayPal, etc.)
    // 2. Never handle credit card data directly
    // 3. Use HTTPS and proper encryption
    // 4. Implement proper PCI compliance
    // 5. Use server-side payment processing
    
    // Simulate secure payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment Successful",
        description: `Your ${selectedPlan} plan is now active. You will receive a confirmation email shortly.`
      });
      navigate("/client", { state: { customerDetails, plan: selectedPlan } });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-20 pb-20">
        <h1 className="text-4xl font-bold text-center mb-8">Complete Your Purchase</h1>
        
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name *</label>
                  <Input 
                    name="name"
                    value={customerDetails.name}
                    onChange={handleInputChange}
                    placeholder="John Doe" 
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address *</label>
                  <Input 
                    name="email"
                    type="email"
                    value={customerDetails.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com" 
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number *</label>
                  <Input 
                    name="phone"
                    value={customerDetails.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567" 
                    className="w-full"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Address *</label>
                  <Input 
                    name="address"
                    value={customerDetails.address}
                    onChange={handleInputChange}
                    placeholder="123 Main St" 
                    className="w-full"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">City *</label>
                    <Input 
                      name="city"
                      value={customerDetails.city}
                      onChange={handleInputChange}
                      placeholder="New York" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">State/Province *</label>
                    <Input 
                      name="state"
                      value={customerDetails.state}
                      onChange={handleInputChange}
                      placeholder="NY" 
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">ZIP/Postal Code *</label>
                  <Input 
                    name="zip"
                    value={customerDetails.zip}
                    onChange={handleInputChange}
                    placeholder="10001" 
                    className="w-full"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Domain Information</h2>
              <div>
                <label className="block text-sm font-medium mb-1">Preferred Domain Name *</label>
                <Input 
                  name="domain"
                  value={customerDetails.domain}
                  onChange={handleInputChange}
                  placeholder="mywebsite.com" 
                  className="w-full"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Enter your preferred domain name. We'll check availability during setup.
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Plan:</span>
                <span className="font-medium">{selectedPlan}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Price:</span>
                <span className="font-medium">{planPrices[selectedPlan]}/month</span>
              </div>
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>{planPrices[selectedPlan]}/month</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Payment Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Card Number</label>
                    <Input 
                      type="text" 
                      placeholder="4242 4242 4242 4242" 
                      className="w-full"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Expiry Date</label>
                      <Input 
                        type="text" 
                        placeholder="MM/YY" 
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">CVC</label>
                      <Input 
                        type="text" 
                        placeholder="123" 
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90 h-12 mt-6" 
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Complete Payment'
                  )}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
