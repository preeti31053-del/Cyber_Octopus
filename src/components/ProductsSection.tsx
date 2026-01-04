import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import RecommendedProduct from "./RecommendedProduct";
import { products } from "@/data/products";

const displayProducts = products.slice(0, 6);

const recommendedProduct = products.find((p) => p.featured) || products[0];

const ProductsSection = () => {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Recommended Product - Left sidebar */}
        <div className="lg:col-span-1">
          <RecommendedProduct 
            name={recommendedProduct.name}
            image={recommendedProduct.image}
            originalPrice={recommendedProduct.originalPrice}
            currentPrice={recommendedProduct.currentPrice}
            discount={recommendedProduct.discount}
            slug={recommendedProduct.slug}
          />
        </div>

        {/* Latest Products - Main grid */}
        <div className="lg:col-span-3">
          <div className="section-header">
            <h2 className="section-title">Latest Products</h2>
            <Link to="/products" className="view-all-link">
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
