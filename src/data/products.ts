export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  images: string[];
  originalPrice: number;
  currentPrice: number;
  discount: number;
  category: string;
  subcategory: string;
  description: string;
  specifications: { label: string; value: string }[];
  inStock: boolean;
  featured: boolean;
}

export const categories = [
  {
    name: "Wireless Hacking Devices",
    slug: "wireless-hacking",
    subcategories: ["WiFi Deauthers", "WiFi Jammers", "Bluetooth Hackers", "RF Tools"],
  },
  {
    name: "USB Attack Tools",
    slug: "usb-attack",
    subcategories: ["Rubber Ducky", "BadUSB", "USB Keyloggers", "USB Killers"],
  },
  {
    name: "Network Testing",
    slug: "network-testing",
    subcategories: ["Packet Sniffers", "Network Analyzers", "Pendrives", "Ethernet Tools"],
  },
  {
    name: "Spy Gadgets",
    slug: "spy-gadgets",
    subcategories: ["Spy Cameras", "Audio Recorders", "GPS Trackers", "Hidden Devices"],
  },
  {
    name: "Robotics & Electronics",
    slug: "robotics",
    subcategories: ["Microcontrollers", "Development Boards", "Sensors", "Motors"],
  },
  {
    name: "Software Tools",
    slug: "software",
    subcategories: ["Bootable Pendrives", "Security Suites", "Recovery Tools", "OS Installers"],
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "M5StickC Plus",
    slug: "m5stickc-plus",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=800&fit=crop",
    ],
    originalPrice: 5750,
    currentPrice: 3750,
    discount: 2000,
    category: "Robotics & Electronics",
    subcategory: "Development Boards",
    description: "The M5StickC Plus is a compact development kit featuring an ESP32 PICO-D4 chip. Perfect for IoT projects, wearables, and portable applications.",
    specifications: [
      { label: "Processor", value: "ESP32 PICO-D4" },
      { label: "Display", value: "1.14 inch TFT, 135x240" },
      { label: "Battery", value: "120mAh LiPo" },
      { label: "Connectivity", value: "WiFi, Bluetooth 4.2" },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "IR Controller - USB",
    slug: "ir-controller-usb",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop",
    ],
    originalPrice: 3500,
    currentPrice: 2500,
    discount: 1000,
    category: "Spy Gadgets",
    subcategory: "Hidden Devices",
    description: "Universal USB IR controller for controlling IR-enabled devices. Works with TVs, ACs, and other appliances.",
    specifications: [
      { label: "Interface", value: "USB 2.0" },
      { label: "Range", value: "Up to 10 meters" },
      { label: "Compatibility", value: "Windows, Linux, Mac" },
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 3,
    name: "Kali Linux Bootable Pendrive",
    slug: "kali-linux-pendrive",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=800&fit=crop",
    ],
    originalPrice: 1800,
    currentPrice: 1200,
    discount: 600,
    category: "Software Tools",
    subcategory: "Bootable Pendrives",
    description: "Ready-to-use Kali Linux bootable USB drive. Pre-configured with all penetration testing tools.",
    specifications: [
      { label: "Storage", value: "32GB USB 3.0" },
      { label: "OS Version", value: "Kali Linux 2024.1" },
      { label: "Persistence", value: "Enabled" },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 4,
    name: "Bypass Windows Lock Pendrive",
    slug: "bypass-windows-pendrive",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=800&fit=crop",
    ],
    originalPrice: 2100,
    currentPrice: 1300,
    discount: 800,
    category: "Software Tools",
    subcategory: "Recovery Tools",
    description: "Windows password reset and bypass tool. Works on Windows 7, 8, 10, and 11.",
    specifications: [
      { label: "Storage", value: "16GB USB 2.0" },
      { label: "Compatibility", value: "Windows 7/8/10/11" },
      { label: "Method", value: "SAM Database Reset" },
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 5,
    name: "WiBle Ducky",
    slug: "wible-ducky",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=800&fit=crop",
    ],
    originalPrice: 2600,
    currentPrice: 1800,
    discount: 800,
    category: "USB Attack Tools",
    subcategory: "Rubber Ducky",
    description: "Wireless BadUSB device with Bluetooth control. Execute keystrokes remotely via mobile app.",
    specifications: [
      { label: "Connectivity", value: "Bluetooth 4.0 BLE" },
      { label: "Chip", value: "ATmega32U4" },
      { label: "Range", value: "Up to 15 meters" },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 6,
    name: "ATTiny85 Digispark USB Rubber Ducky",
    slug: "attiny85-digispark",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=800&fit=crop",
    ],
    originalPrice: 2000,
    currentPrice: 1350,
    discount: 650,
    category: "USB Attack Tools",
    subcategory: "BadUSB",
    description: "Compact USB HID attack tool based on ATTiny85. Programmable keystroke injection device.",
    specifications: [
      { label: "Chip", value: "ATTiny85" },
      { label: "Flash", value: "8KB" },
      { label: "Speed", value: "16.5MHz" },
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 7,
    name: "WiFi Deauther 2.4 GHz",
    slug: "wifi-deauther",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=800&fit=crop",
    ],
    originalPrice: 4999,
    currentPrice: 2199,
    discount: 2800,
    category: "Wireless Hacking Devices",
    subcategory: "WiFi Deauthers",
    description: "ESP8266-based WiFi deauthentication device. Features OLED display and web interface.",
    specifications: [
      { label: "Chip", value: "ESP8266" },
      { label: "Frequency", value: "2.4 GHz" },
      { label: "Display", value: "0.96 inch OLED" },
      { label: "Battery", value: "500mAh LiPo" },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 8,
    name: "Mini Spy Camera HD",
    slug: "mini-spy-camera",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=800&fit=crop",
    ],
    originalPrice: 3999,
    currentPrice: 2499,
    discount: 1500,
    category: "Spy Gadgets",
    subcategory: "Spy Cameras",
    description: "Ultra-compact HD spy camera with night vision and motion detection.",
    specifications: [
      { label: "Resolution", value: "1080p HD" },
      { label: "Storage", value: "Up to 128GB SD" },
      { label: "Battery", value: "2-3 hours" },
      { label: "Night Vision", value: "IR LEDs" },
    ],
    inStock: true,
    featured: false,
  },
];

export const getProductBySlug = (slug: string) => 
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);

export const getFeaturedProducts = () =>
  products.filter((p) => p.featured);
