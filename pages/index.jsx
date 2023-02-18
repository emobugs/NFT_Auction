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

import {useState} from 'react';

export default function Index() {
  const [dataFeatured, setDataFeatured] = useState([]);
  const [dataTrending, setdataTrending] = useState([]);
  const [dataUsers, setdataUsers] = useState([]);
  const [dataNfts, setdataNfts] = useState([]);
  return (
    <div>
      {/* <Header></Header>
      <Featured></Featured>
      <Trending></Trending>
      <TopCollectors></TopCollectors>
      <How></How>
      <Auctions></Auctions> */}
      <TopCollectors
        collectors={[
          {
            name: "emo",
            nftsCount: 12,
            avatar: "./images/avatar.png",
            verified: true,
          },
          {
            name: "emo",
            nftsCount: 12,
            avatar: "./images/avatar.png",
            verified: true,
          },
          {
            name: "emo",
            nftsCount: 12,
            avatar: "./images/avatar.png",
            verified: true,
          },
          {
            name: "emo",
            nftsCount: 12,
            avatar: "./images/avatar.png",
            verified: true,
          },
          {
            name: "emo",
            nftsCount: 12,
            avatar: "./images/avatar.png",
            verified: true,
          },
          {
            name: "emo",
            nftsCount: 12,
            avatar: "./images/avatar.png",
            verified: true,
          },
          {
            name: "emo",
            nftsCount: 12,
            avatar: "./images/avatar.png",
            verified: true,
          },
          {
            name: "emo",
            nftsCount: 12,
            avatar: "./images/avatar.png",
            verified: true,
          },
          {
            name: "emo",
            nftsCount: 12,
            avatar: "./images/avatar.png",
            verified: true,
          },
          {
            name: "emo",
            nftsCount: 12,
            avatar: "./images/avatar.png",
            verified: true,
          },
          {
            name: "emo",
            nftsCount: 12,
            avatar: "./images/avatar.png",
            verified: true,
          },
        ]}
      ></TopCollectors>
    </div>
  );
}
