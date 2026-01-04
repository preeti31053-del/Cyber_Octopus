import { Camera, MapPin, Cpu, Shield, Wifi, Lock, ChevronRight } from "lucide-react";

const categories = [
  { id: 1, name: "SPY CAM", icon: Camera, color: "from-pink-500 to-rose-600" },
  { id: 2, name: "Tracker", icon: MapPin, color: "from-blue-500 to-cyan-600" },
  { id: 3, name: "Robotics", icon: Cpu, color: "from-purple-500 to-violet-600" },
  { id: 4, name: "Penetration Testing", icon: Shield, color: "from-orange-500 to-amber-600" },
  { id: 5, name: "IoT", icon: Wifi, color: "from-green-500 to-emerald-600" },
  { id: 6, name: "Cyber Security", icon: Lock, color: "from-teal-500 to-cyan-600" },
];

const CategorySection = () => {
  return (
    <section className="py-8">
      <div className="section-header">
        <h2 className="section-title">Categories</h2>
        <a href="#" className="view-all-link">
          View All
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.id} className="category-card group">
              <div className={`category-icon bg-gradient-to-br ${category.color}`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategorySection;
