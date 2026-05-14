import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { formatFCFA, type Product } from "@/lib/mock-data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/produits/$id"
      params={{ id: product.id }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-elegant"
    >
      <div className="aspect-square overflow-hidden bg-gradient-soft">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={400}
          height={400}
          className="h-full w-full object-contain p-4 transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-foreground">
          {product.name}
        </h3>
        <p className="text-base font-bold text-primary">
          {formatFCFA(product.price)}
        </p>
        <div className="mt-auto flex items-center gap-1 pt-2 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" />
          <span className="font-medium text-foreground">{product.rating}</span>
          <span>({product.reviews})</span>
          <span className="ml-auto truncate">{product.shop}</span>
        </div>
      </div>
    </Link>
  );
}
