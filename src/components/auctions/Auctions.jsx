import styles from "./Auctions.module.scss";

import { Container, Grid, FormControl, MenuItem, Select } from "@mui/material";
import Card from "../card/Card";

import { useState} from "react";

export default function Auctions({ cards = [], filters = [], auctionsFilterHandle }) {
  const [priceFilter, setPriceFilter] = useState(1);

  const handleChange = (e) => {
    setPriceFilter(e.target.value);
    auctionsFilterHandle(e.target.value);
  };

  return (
    <Container className={styles.container} sx={{ width: "100%", margin: 0 }}>
      <div className={styles.top}>
        <h2 className={styles.heading}>Live Auctions</h2>
        <FormControl sx={{ width: "300px", marginLeft: "auto" }}>
          <Select defaultValue="" value={priceFilter} onChange={handleChange}>
            {Array.isArray(filters.price) && filters.price.map((p, i) => {
              return (
                <MenuItem label={p.label} value={p.value} key={i}>
                  {p.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <Container>
        <Grid container display="flex" className={styles["grid-cnt"]}>
          {cards.map((card, i) => {
            return (
              <Grid item md={3} key={i * 3}>
                <Card
                  key={i}
                  name={titles[i]}
                  mediaUrl={card.mediaUrl}
                  price={card.price}
                  likes={card.likes}
                  currency={card.currency}
                  title={titles[i]}
                  timeLeft="20"
                ></Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
}
