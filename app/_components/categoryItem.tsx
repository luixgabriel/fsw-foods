import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  item: Category;
}

const CategoryItem = ({ item }: CategoryItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <Image src={item.imageUrl} alt={item.name} width={30} height={30} />
      <span>{item.name}</span>
    </div>
  );
};

export default CategoryItem;
