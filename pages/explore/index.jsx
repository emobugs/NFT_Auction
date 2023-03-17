import Header from "../../src/components/header/Header";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import Footer from "../../src/components/footer/Footer";
import Card from "../../src/components/card/Card";
// import { ExploreProvider } from "../../src/context/ExploreContext";

import styles from "./index.module.scss";
import { Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";

export default function index() {
  const [nfts, setNfts] = useState([]);
  const [nftFilters, setNftFilters] = useState([]);
  const [sort, setSort] = useState('');
  const [price, setPrice] = useState('');

  // const compareNfts = (nfts, type, direction) => {
    
  //   if(type.toLowerCase() === 'name'){
  //     console.log('name')
  //   }
  // }

  async function sortNfts (sortType) {
    const option = await nftFilters.sort[sortType-1].label;
    const type = /\w+/.exec(option)[0];
    console.log(type)
    const direction = /\((\w+)\)/.exec(option)[1];
    console.log(direction);
    const param = `${type.toLowerCase()}-${direction.toLowerCase().substring(0,3)}`;
    console.log(param)
    setSort(sortType);
    return param;

    const sortedNfts = compareNfts(nfts, type, direction)
  }

  const priceRange = (price) =>{
    setPrice(price);
    return price;
  }


  async function renderPage(sort, price){
    return await (await (await fetch(`${process.env.apiUrl}/explore/?sort=${sort}&price=${price}`)).json())
  }

  useEffect(async () => {
    const response = await fetch(`${process.env.apiUrl}/explore`);
    const data = await response.json();
    setNfts(data.nfts);
    setNftFilters(data.filters);
  }, []);


  useEffect(async ()=>{
    const fetchSort = await renderPage(sort, price);
    console.log(fetchSort);
    // await fetch()
  }, [sortNfts, priceRange])

  return (
    <div>
      {/* <ExploreProvider> */}
        <Header />
        <Container className={styles["wrapper"]} maxWidth="xl">
          <Grid container spacing={2} maxWidth="xl">
            <Grid item md={3}>
              <ExploreTitle text="Explore" />
            </Grid>
            <Grid item md={9}>
              <ExploreFilters filters={nftFilters} sortNfts={sortNfts} priceRange={priceRange}/>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {nfts.map((card, i) => {
              return (
                <Grid item key={i} md={3}>
                  <Card
                    title={card.name}
                    likes={card.likes}
                    mediaUrl={card.mediaUrl}
                    user={card.owner}
                    price={card.price}
                    currency={card.currency}
                    timeLeft={card.auction_end}
                    key={i}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Footer />
      {/* </ExploreProvider> */}
    </div>
  );
}
