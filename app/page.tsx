import Image from "next/image";
import CategoryList from "./_components/categoryList";
import Header from "./_components/header";
import Search from "./_components/search";

const Home = () => {
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
        <Image
          src="/promo-banner-01.png"
          alt="promo-2"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full object-contain"
          quality={100}
        />
      </div>
    </>
  );
};

export default Home;
