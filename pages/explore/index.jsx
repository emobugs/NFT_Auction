import Header from "../../src/components/header/Header";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import Footer from "../../src/components/footer/Footer";
import Card from "../../src/components/card/Card";

import styles from "./index.module.scss";
import { Container, Grid } from "@mui/material";

import nftCards from "../../data/nfts.json";

export default function index() {
  return (
    <div>
      <Header />
      <Container className={styles["wrapper"]} maxWidth="xl">
        <Grid container spacing={2} maxWidth="xl">
          <Grid item md={3}>
            <ExploreTitle text="Explore" />
          </Grid>
          <Grid item md={9}>
            <ExploreFilters />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {nftCards.map((card, i) => {
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
