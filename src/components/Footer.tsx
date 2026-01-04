import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-header text-header-foreground mt-12">
      {/* Newsletter Section */}
      <div className="bg-primary py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary-foreground">Subscribe to our Newsletter</h3>
            <p className="text-primary-foreground/80">Get updates on new products and exclusive offers</p>
          </div>
          <div className="flex w-full md:w-auto max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-foreground focus:outline-none"
            />
            <Button className="rounded-l-none bg-header hover:bg-header/90">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-xl">🐙</span>
              </div>
              <div>
                <h4 className="font-bold">CYBER OCTOPUS</h4>
              </div>
            </div>
            <p className="text-header-foreground/70 text-sm leading-relaxed">
              Your trusted source for cybersecurity tools, IoT devices, robotics components, and ethical hacking equipment.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-header-foreground/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-header-foreground/70 hover:text-primary transition-colors">Shop</a></li>
              <li><a href="#" className="text-header-foreground/70 hover:text-primary transition-colors">Categories</a></li>
              <li><a href="#" className="text-header-foreground/70 hover:text-primary transition-colors">Brands</a></li>
              <li><a href="#" className="text-header-foreground/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-header-foreground/70 hover:text-primary transition-colors">My Account</a></li>
              <li><a href="#" className="text-header-foreground/70 hover:text-primary transition-colors">Track Order</a></li>
              <li><a href="#" className="text-header-foreground/70 hover:text-primary transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-header-foreground/70 hover:text-primary transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="text-header-foreground/70 hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-header-foreground/70">+91 9608210117</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-header-foreground/70">support@cyberoctopus.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-header-foreground/70">India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-header-foreground/60">© 2024 Cyber Octopus. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-header-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-header-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
