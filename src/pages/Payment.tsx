
import Navbar from "@/components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

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

  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment Successful",
        description: `Your ${selectedPlan} plan is now active.`
      });
      navigate("/client");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl font-bold text-center mb-8">Complete Your Payment</h1>
        
        <div className="max-w-md mx-auto">
          <Card className="p-6 mb-6">
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
          </Card>

          <Card className="p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Card Number</label>
                <input 
                  type="text" 
                  placeholder="4242 4242 4242 4242" 
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Expiry Date</label>
                  <input 
                    type="text" 
                    placeholder="MM/YY" 
                    className="w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">CVC</label>
                  <input 
                    type="text" 
                    placeholder="123" 
                    className="w-full border rounded p-2"
                  />
                </div>
              </div>
            </div>
          </Card>

          <Button 
            className="w-full bg-secondary hover:bg-secondary/90 h-12" 
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
      </div>
    </div>
  );
};

export default Payment;
