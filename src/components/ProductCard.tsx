import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id: number;
  name: string;
  slug?: string;
  image: string;
  originalPrice: number;
  currentPrice: number;
  discount: number;
}

const ProductCard = ({ id, name, slug, image, originalPrice, currentPrice, discount }: ProductCardProps) => {
  const { addItem } = useCart();
  const productSlug = slug || name.toLowerCase().replace(/\s+/g, "-");

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id, name, image, price: currentPrice });
  };

  return (
    <Link to={`/product/${productSlug}`} className="product-card group block">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Discount badge */}
        {discount > 0 && (
          <div className="discount-badge">
            -₹{discount.toLocaleString()}
          </div>
        )}

        {/* Hover actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            className="w-10 h-10 rounded-full bg-white text-foreground hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
          >
            <Heart className="w-5 h-5" />
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            className="w-10 h-10 rounded-full bg-white text-foreground hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button 
            onClick={handleAddToCart}
            className="w-10 h-10 rounded-full bg-white text-foreground hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="p-4">
        <h3 className="font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="price-original">₹{originalPrice.toLocaleString()}</span>
          <span className="price-current">₹{currentPrice.toLocaleString()}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
