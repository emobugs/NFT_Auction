import Auctions from "../src/components/auctions/Auctions";
import TopCollectors from "../src/components/collectors/TopCollectors";
import Featured from "../src/components/featured/Featured";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import How from "../src/components/how/How";
import Trending from "../src/components/trending/Trending";

// product
import ProductImage from "../src/components/product/ProductImage";
import ProductInfoTitle from "../src/components/product/ProductInfoTitle";
import ProductInfoCreator from "../src/components/product/ProductInfoCreator";
import ProductInfoTimer from "../src/components/product/ProductInfoTimer";

import dataFeatured from "../data/featured.json";
import dataNfts from "../data/nfts.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";
import ProductInfo from "../src/components/product/ProductInfo";
import ProductTabs from "../src/components/product/ProductTabs";

// import { useEffect, useState } from "react";

export default function Index() {
  // const [featureCards, setFeatureCards] = useState([]);
  // const [trendingCards, setTrendingCards] = useState([]);
  // const [dataCollectors, setDataCollectors] = useState([]);
  // const [nfts, setNfts] = useState([]);

  // useEffect(() => {
  //   setFeatureCards(dataFeatured);
  //   setTrendingCards(dataTrending);
  //   setDataCollectors(dataUsers);
  //   setNfts(dataNfts);
  // }, []);

  let date; 
  date  = '2023-02-25T20:39:40.000Z';
  // date = [2023, 1, 24, 23, 46, 5];
  return (
    <div>
      <ProductTabs text={'eifwnmoiew ienfi ewni ewni newi ni newi newin ew pkfew [pk'} 
  //     bids={[
  //       {
  //         user: {
  //            avatar : './images.avatar.png',
  //            name: 'emo',
  //            verified: false
  //         },
  //         amount: 100,
  //     date: date
  //      },
  //      {
  //       user: {
  //          avatar : './images.avatar.png',
  //          name: 'ivan',
  //          verified: false
  //       },
  //       amount: 25,
  //     date: date
  //    },
  //    {
  //     user: {
  //        avatar : './images.avatar.png',
  //        name: 'petar',
  //        verified: false
  //     },
  //     amount: 56,
  //     date: date
  //  },
  //     ]}
      ></ProductTabs>

      {/* <ProductInfo
        title={"setaa"}
        creator={{
          name: "emo",
          avatar: "./images.avatar.png",
          verified: false,
        }}
        price={12321}
        currency="Doge"
        likes={21421}
        onTimeEnd= {()=>{return 'completed'}}
        timeEnd="12.22.28"
        isLive= {true}
      ></ProductInfo> */}
      {/* <ProductInfoTimer timeEnd={10000} onTimeEnd={() => {return 'completed timer'}}></ProductInfoTimer> */}
      {/* <ProductInfoCreator
         name= "ivan" avatar= "./images/avatar.png" verified = "false" 
      /> */}
      {/* <ProductInfoTitle text="Adidas shoes"></ProductInfoTitle>
      <ProductImage url={"https://images.unsplash.com/photo-1676472834840-4cf017f058b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}></ProductImage> */}

      {/* <Header></Header>
      <Featured items={featureCards}></Featured>
      <Trending cards={trendingCards}></Trending>
      <TopCollectors
        collectors={dataCollectors.map((c) => {
          c["name"] = c.username;
          return c;
        })}
      ></TopCollectors>
      <How></How>
      <Auctions cards={nfts}></Auctions>
      <Footer></Footer> */}
    </div>
  );
}
