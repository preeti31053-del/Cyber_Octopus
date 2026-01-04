import { Search, Heart, User, ShoppingCart, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CategoriesDropdown from "./CategoriesDropdown";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems, totalPrice, setIsCartOpen } = useCart();

  return (
    <header className="w-full">
      {/* Top bar with phone and language */}
      <div className="header-gradient text-header-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91 9608210117</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
            <span>🇮🇳</span>
            <span>English</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Main header with logo, search, and icons */}
      <div className="header-gradient text-header-foreground py-4">
        <div className="container flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">🐙</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg leading-tight">CYBER</h1>
              <p className="text-xs text-header-foreground/70">OCTOPUS</p>
            </div>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl">
            <div className="flex">
              <input
                type="text"
                placeholder="Search for items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input flex-1 min-w-0"
              />
              <button className="search-button">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Action icons */}
          <div className="flex items-center gap-2">
            <button className="icon-button hidden sm:flex">
              <Heart className="w-5 h-5" />
              <span className="icon-badge">0</span>
            </button>
            <Link to="/auth" className="icon-button hidden sm:flex">
              <User className="w-5 h-5" />
            </Link>
            <button className="icon-button" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="w-5 h-5" />
              <span className="icon-badge">{totalItems}</span>
            </button>
            <div className="hidden sm:block text-sm ml-2">
              <p className="text-header-foreground/70">My cart</p>
              <p className="font-semibold">₹{totalPrice.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="nav-gradient text-nav-foreground">
        <div className="container flex items-center gap-6 py-3">
          <CategoriesDropdown />
          
          <div className="flex items-center gap-6">
            <Link to="/" className="font-medium hover:text-white/80 transition-colors">Home</Link>
            <Link to="/products" className="font-medium hover:text-white/80 transition-colors">All Products</Link>
            <Link to="/products?category=Wireless%20Hacking%20Devices" className="font-medium hover:text-white/80 transition-colors">
              Discounted Products
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
