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
import dataProfileFilters from "../data/filtersProfile.json";

import dataProduct from "../data/product.json";
import ProductInfo from "../src/components/product/ProductInfo";
import ProductTabs from "../src/components/product/ProductTabs";
import ProductActions from "../src/components/product/ProductActions";
import ProductContainer from "../src/components/product/ProductContainer";
import ProfileHero from "../src/components/profile/ProfileHero";

import { useEffect, useState } from "react";
import ProfileUser from "../src/components/profile/ProfileUser";
import ProfileCollectionFilters from "../src/components/profile/ProfileCollectionFilters";
import ProfileCollection from "../src/components/profile/ProfileCollection";

import ActivityListItem from "../src/components/activity/ActivityListItem";
import ActivityList from "../src/components/activity/ActivityList";

import ExploreFilters from "../src/components/explore/ExploreFilters";

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([]);
  // const [trendingCards, setTrendingCards] = useState([]);
  // const [dataCollectors, setDataCollectors] = useState([]);
  // const [nfts, setNfts] = useState([]);
  // const [productData, setProductData] = useState([]);
  // const [filtersProfile, setFiltersProfile] = useState([]);

  useEffect(() => {
   //   setFeatureCards(dataFeatured);
   //   setTrendingCards(dataTrending);
   //   setDataCollectors(dataUsers);
   //   setNfts(dataNfts);
   // setProductData(dataProduct);
   // setFiltersProfile(dataProfileFilters);
   getData();
 }, []);
  
  async function getData(){
   await fetch(`${process.env.apiUrl}/featured`)
   .then(response => {
      console.log(response)
     if(response.ok){
       return response.json();
     }
     throw response;
   }).then(data => {
      console.log('data', data)
     setFeaturedCards(data.nfts);
   }).catch(error => {
     console.error('error' + error);
   })
 }

  

  // let date;
  // date  = '2023-02-25T20:39:40.000Z';
  // date = [2023, 1, 24, 23, 46, 5];
  return (
    <div>
      <Featured items={featuredCards}/>
     
    </div>
  );
}
