import React from "react";
import ProductItem from "./productItem";
import { Prisma, Product } from "@prisma/client";
interface ProductListProps {
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>[];
}
const ProductsList = async ({ products }: ProductListProps) => {
  return (
    <div className="flex h-[300px] gap-3 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((item: Product) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductsList;
