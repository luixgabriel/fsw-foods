import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="h-[150px] w-[150px] space-y-2">
      <h1>{product.name}</h1>
      <Image
        src={product.imageUrl}
        alt="image product"
        className="object-cover"
        fill
      />
    </div>
  );
};

export default ProductItem;
