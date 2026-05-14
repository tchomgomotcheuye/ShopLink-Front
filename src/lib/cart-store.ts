import { useEffect, useState } from "react";
import { products, type Product } from "./mock-data";

export type CartItem = { productId: string; qty: number };

const KEY = "shoplink-cart";
const listeners = new Set<() => void>();

function read(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
  } catch {
    return [];
  }
}

function write(items: CartItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(items));
  listeners.forEach((l) => l());
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => {
    setItems(read());
    const l = () => setItems(read());
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);

  const detailed = items
    .map((i) => {
      const p = products.find((x) => x.id === i.productId);
      return p ? { ...i, product: p } : null;
    })
    .filter((x): x is CartItem & { product: Product } => x !== null);

  const subtotal = detailed.reduce((s, i) => s + i.product.price * i.qty, 0);
  const count = detailed.reduce((s, i) => s + i.qty, 0);

  return {
    items: detailed,
    count,
    subtotal,
    add: (productId: string, qty = 1) => {
      const cur = read();
      const found = cur.find((i) => i.productId === productId);
      if (found) found.qty += qty;
      else cur.push({ productId, qty });
      write(cur);
    },
    update: (productId: string, qty: number) => {
      const cur = read().map((i) =>
        i.productId === productId ? { ...i, qty } : i,
      );
      write(cur.filter((i) => i.qty > 0));
    },
    remove: (productId: string) => {
      write(read().filter((i) => i.productId !== productId));
    },
    clear: () => write([]),
  };
}
