import Header from "../../src/components/header/Header";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import Footer from "../../src/components/footer/Footer";
import Card from "../../src/components/card/Card";

import styles from "./index.module.scss";
import { Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";

export default function index() {
  const [nfts, setNfts] = useState([]);
  const [nftFilters, setNftFilters] = useState([]);


  useEffect(async() =>{
    const response = await fetch(`${process.env.apiUrl}/explore`);
    const result = await response.json();
    const nfts = await result.nfts;
    const filters = await result.filters;
    setNfts(nfts);
    setNftFilters(filters);
  }, [])

  return (
    <div>
      <Header />
      <Container className={styles["wrapper"]} maxWidth="xl">
        <Grid container spacing={2} maxWidth="xl">
          <Grid item md={3}>
            <ExploreTitle text="Explore" />
          </Grid>
          <Grid item md={9}>
            <ExploreFilters filters={nftFilters} />
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
    </div>
  );
}
