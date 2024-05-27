import CategoryList from "./_components/categoryList";
import Header from "./_components/header";
import Search from "./_components/search";
import ProductsList from "./_components/productsList";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { db } from "./_lib/prisma";
import PromoBanner from "./_components/promoBanner";
import RestaurantList from "./_components/restaurantsList";

const Home = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>
      <div className="px-5 pt-6">
        <PromoBanner
          src="/promo-banner-01.png"
          alt="Até 30% de desconto em pizzas!"
        />
      </div>
      <div className="pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button variant="ghost" className="text-primary">
            Ver todos
            <ChevronRightIcon />
          </Button>
        </div>
        <ProductsList products={products} />
        <div className="px-5 pt-6">
          <PromoBanner
            src="/promo-banner-02.png"
            alt="Até 30% de desconto em pizzas!"
          />
        </div>
        <div className="px-5 pt-6">
          <RestaurantList />
        </div>
      </div>
    </>
  );
};

export default Home;
