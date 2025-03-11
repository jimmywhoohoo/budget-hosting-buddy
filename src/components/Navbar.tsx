
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            BudgetHost
          </span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
            Pricing
          </Link>
          <Link to="/features" className="text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </Link>
          <Button variant="default" className="bg-secondary hover:bg-secondary/90">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
