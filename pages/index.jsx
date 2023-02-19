import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import TopCollectors from "../src/components/collectors/TopCollectors";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";

import dataFeatured from "../data/featured.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";
import dataNfts from "../data/nfts.json";

import { useState, useEffect } from "react";

export default function Index() {
  const [featureCards, setFeatureCards] = useState([]);
  const [trendingCards, setTrendingCards] = useState([]);
  const [dataCollectors, setDataCollectors] = useState([]);
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    setFeatureCards(dataFeatured);
    setTrendingCards(dataTrending);
    setDataCollectors(dataUsers);
    setNfts(dataNfts);
  }, []);

  return (
    <div>
      <Header></Header>
      <Featured items={featureCards}></Featured>
      <Trending cards={trendingCards}></Trending>
      <TopCollectors collectors={dataCollectors}></TopCollectors>
      <How></How>
      <Auctions cards={nfts}></Auctions>
      <Footer></Footer>
    </div>
  );
}
