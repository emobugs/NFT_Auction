import { useRouter } from "next/dist/client/router";

import dataNfts from "../../../data/nfts.json";

import { useEffect, useState } from "react";

import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import ProductContainer from "../../../src/components/product/ProductContainer";

export default function Product() {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState({});
  const router = useRouter();
  const id = router.query.id;

  const chooseProduct = (id) => {
    // try catch
    const parsedId = Number.parseInt(id);
    return dataNfts.find((p) => p.id === parsedId);
  };

  useEffect(() => {
    setProductId(id);

    setProduct(chooseProduct(id));
  }, [id]);

  return (
    <div>
      <Header />
      <ProductContainer product={product} />
      <Footer />
    </div>
  );
}
