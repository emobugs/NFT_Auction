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

  const [trendingItems, setTrendingItems] = useState([]);
  const [trendingFilters, setTrendingFilters] = useState([]);
  const [trendingFilterValue, setTrendingFilterValue] = useState("");

  const [collectors, setCollectors] = useState([]);
  const [collectorFilters, setCollectorFilters] = useState([]);
  const [collectorsFilterValue, setCollectorsFilterValue] = useState("");

  const [auctions, setAuctions] = useState([]);
  const [auctionFilters, setAuctionFilters] = useState([]);
  const [auctionsFilterValue, setAuctionsFilterValue] = useState("");

  async function getData(component) {
    const result = await fetch(`${process.env.apiUrl}/${component}`);
    const response = await result.json();
    return response;
  }

  // featured data
  useEffect(async () => {
    const data = await getData("featured");
    data.nfts[0].rows = 2;
    data.nfts[0].cols = 3;
    setFeaturedCards(data.nfts);
  }, []);

  // trending data
  useEffect(async () => {
    const data = await getData("trending");
    setTrendingItems(data.nfts);
    setTrendingFilters(data.filters);
  }, []);

  // top collectors
  useEffect(async () => {
    const data = await getData("top-collectors");
    setCollectors(data.users);
    setCollectorFilters(data.filters);
  }, []);

  // auctions
  useEffect(async () => {
    const data = await getData("live-auctions");
    setAuctions(data.nfts);
    setAuctionFilters(data.filters);
  }, []);

  // add requests by filters to Trending component
  //////////////////////////////////////////////////////////////
  const trendingFilterHandle = (value) => {
    setTrendingFilterValue(value);
  };
  // fetch again on filters change
  useEffect(async () => {
    const data = await getData(`trending?sort=${trendingFilterValue}`);
  }, [trendingFilterValue]);
  //////////////////////////////////////////////////////////

  //add requests by filters in Top Collectors component
  /////////////////////////////////////////////////////////
  const collectorsFilterHandle = (value) => {
    setCollectorsFilterValue(value);
    console.log(value);
  };
  useEffect(async () => {
    const data = await getData(`trending?sort=${collectorsFilterValue}`);
  }, [collectorsFilterValue]);
  /////////////////////////////////////////////////////////////////////

  //add requests by filters in Live Auctions component
  /////////////////////////////////////////////////////////
  const auctionsFilterHandle = (value) => {
    setCollectorsFilterValue(value);
    console.log(value);
  };
  useEffect(async () => {
    const data = await getData(`live-auctions?sort=${auctionsFilterValue}`);
  }, [auctionsFilterValue]);
  /////////////////////////////////////////////////////////////////////

  // let date;
  // date  = '2023-02-25T20:39:40.000Z';
  // date = [2023, 1, 24, 23, 46, 5];
  return (
    <div>
      <Featured items={featuredCards} />
      <Trending
        cards={trendingItems}
        filters={trendingFilters}
        trendingFilterHandle={trendingFilterHandle}
      />
      <TopCollectors
        collectors={collectors}
        filters={collectorFilters}
        collectorsFilterHandle={collectorsFilterHandle}
      />
      <Auctions
        cards={auctions}
        filters={auctionFilters}
        auctionsFilterHandle={auctionsFilterHandle}
      />
    </div>
  );
}
