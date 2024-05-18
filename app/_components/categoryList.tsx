import React from "react";
import { db } from "../_lib/prisma";
import CategoryItem from "./categoryItem";

const CategoryList = async () => {
  const categories = await db.category.findMany();
  return (
    <div>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CategoryList;
