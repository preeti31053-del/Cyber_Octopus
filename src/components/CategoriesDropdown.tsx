import { useState } from "react";
import { Grid3X3, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const CategoriesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setHoveredCategory(null);
      }}
    >
      <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
        <Grid3X3 className="w-5 h-5" />
        <span className="font-medium">Categories</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-lg shadow-lg border border-border z-50 overflow-hidden">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="relative"
              onMouseEnter={() => setHoveredCategory(category.slug)}
            >
              <Link
                to={`/products?category=${encodeURIComponent(category.name)}`}
                className="flex items-center justify-between px-4 py-3 hover:bg-muted transition-colors text-foreground"
              >
                <span className="text-sm font-medium">{category.name}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </Link>

              {/* Subcategories dropdown */}
              {hoveredCategory === category.slug && (
                <div className="absolute left-full top-0 ml-1 w-48 bg-card rounded-lg shadow-lg border border-border z-50">
                  {category.subcategories.map((sub) => (
                    <Link
                      key={sub}
                      to={`/products?category=${encodeURIComponent(category.name)}&subcategory=${encodeURIComponent(sub)}`}
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;
