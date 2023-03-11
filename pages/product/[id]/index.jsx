import { useRouter } from "next/dist/client/router";

import { useEffect, useState } from "react";

import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import ProductContainer from "../../../src/components/product/ProductContainer";

export default function Product() {
  const [product, setProduct] = useState({});
  const router = useRouter();
  const id = router.query.id;

  useEffect(async () => {
    const result = await fetch(`${process.env.apiUrl}/nfts/${id}`);
    if(result.ok){
      const data = await result.json();
      setProduct(data);
    }

  }, [id]);

  return (
    <div>
      <Header />
      <ProductContainer product={product} />
      <Footer />
    </div>
  );
}
