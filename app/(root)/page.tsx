import { Button } from "@/components/ui/button";
import LoadingPage from "../loading";

import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

export const metadata = {
  title: "Home",
  description: "Welcome to Prostore, your one-stop shop for everything!",
};

const HomePage = async () => {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
};

export default HomePage;
