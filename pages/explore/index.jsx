import Header from "../../src/components/header/Header";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import Footer from "../../src/components/footer/Footer";
import Card from "../../src/components/card/Card";
// import { ExploreProvider } from "../../src/context/ExploreContext";
import { useRouter } from "next/router";

import styles from "./index.module.scss";
import { Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";

export default function index() {
  const [nfts, setNfts] = useState([]);
  const [nftFilters, setNftFilters] = useState([]);
  const [sort, setSort] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  const sortByNameAscending = () => {
    const sortedByName = nfts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setNfts(sortedByName);
  };

  const sortByNameDescending = () => {
    const sortedByName = nfts.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    setNfts(sortedByName);
  };


  // date is identical for all items !!!!
  const sortByDateAscending = () => {
    nfts.map(n => console.log(n.published_at));
  };
  const sortByDateDescending = () => {
    const sortedByName = nfts.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    setNfts(sortedByName);
  };

  const compareNfts = (nfts, type, direction) => {
    switch (type) {
      case "name":
        switch (direction) {
          case "ascending":
            sortByNameAscending(nfts);
            break;
          case "descending":
            sortByNameDescending(nfts);
            break;
        }
        break;
      case "date":
        switch (direction) {
          case "ascending":
            sortByDateAscending(nfts);
            break;
          case "descending":
            sortByDateDescending(nfts);
            break;
        }
    }}

    async function sortNfts(sortType) {
      // get option label from filters.sort array
      const option = await nftFilters.sort[sortType - 1].label;

      // extrapolate and formatting type from option string
      const type = /\w+/.exec(option)[0].toLowerCase();

      // extrapolate direction of sorting from option string
      const direction = /\((\w+)\)/.exec(option)[1].toLowerCase();

      // format query parameter and pass it to the router to change it
      const param = `${type}-${direction.substring(0, 3)}`;
      router.push(`explore/?sort=${param}`, undefined, { shallow: true });

      // set sorting type
      setSort(param);

      // sort by the given type
      compareNfts(nfts, type, direction);
      return param;
    }

    const priceRange = (price) => {
      setPrice(price);
      return price;
    };

    async function renderPage(sort, price) {
      return await await (
        await fetch(
          `${process.env.apiUrl}/explore/?sort=${sort}&price=${price}`
        )
      ).json();
    }

    // fetch the data for nfts and filters from the api an set the state
    useEffect(async () => {
      const response = await fetch(`${process.env.apiUrl}/explore`);
      const data = await response.json();
      setNfts(data.nfts);
      setNftFilters(data.filters);
    }, []);

    useEffect(async () => {
      // const fetchSort = await renderPage(sort, price); // needed for working in validator
      renderNfts(nfts);
    }, [sortNfts, priceRange]);

    const renderNfts = (nfts) => {
      return nfts.map((card, i) => {
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
      });
    };

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
              <ExploreFilters
                filters={nftFilters}
                sortNfts={sortNfts}
                priceRange={priceRange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {renderNfts(nfts)}
          </Grid>
        </Container>
        <Footer />
        {/* </ExploreProvider> */}
      </div>
    );
  };
