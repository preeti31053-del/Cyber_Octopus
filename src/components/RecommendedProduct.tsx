import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface RecommendedProductProps {
  name: string;
  image: string;
  originalPrice: number;
  currentPrice: number;
  discount: number;
  slug?: string;
}

const RecommendedProduct = ({
  name,
  image,
  originalPrice,
  currentPrice,
  discount,
  slug,
}: RecommendedProductProps) => {
  const { addItem } = useCart();
  const productSlug = slug || name.toLowerCase().replace(/\s+/g, "-");

  const handleAddToCart = () => {
    addItem({
      id: Date.now(),
      name,
      image,
      price: currentPrice,
    });
  };

  return (
    <div className="bg-card rounded-xl p-6 border-l-4 border-primary h-full flex flex-col">
      <h3 className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">
        Recommended Product
      </h3>
      
      <Link to={`/product/${productSlug}`} className="block">
        <div className="relative mb-4">
          <img
            src={image}
            alt={name}
            className="w-full aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
          {discount > 0 && (
            <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
              -₹{discount.toLocaleString()}
            </div>
          )}
        </div>
      </Link>

      <Link to={`/product/${productSlug}`} className="block flex-1">
        <h4 className="font-bold text-lg text-foreground mb-2 hover:text-primary transition-colors">
          {name}
        </h4>
      </Link>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="line-through text-muted-foreground">₹{originalPrice.toLocaleString()}</span>
        <span className="text-xl font-bold text-primary">₹{currentPrice.toLocaleString()}</span>
      </div>

      <Button className="w-full" onClick={handleAddToCart}>
        <ShoppingCart className="w-4 h-4 mr-2" />
        Grab This Deal
      </Button>
    </div>
  );
};

export default RecommendedProduct;
