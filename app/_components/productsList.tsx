import React from "react";
import { db } from "../_lib/prisma";
import ProductItem from "./productItem";
import { Product } from "@prisma/client";

const ProductsList = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  return (
    <div>
      <h1>Products List</h1>
      {products.map((item: Product) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductsList;
