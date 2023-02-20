import styles from "./Trending.module.scss";

import { Container, Grid, MenuItem, Select } from "@mui/material";
import Card from "../card/Card";
const titles = ["Clock", "DOGE", "BTC", "Litecoin"];

export default function Trending({ cards = [] }) {
  return (
    <Container className={styles.container} maxWidth={false}>
      <div className={styles.top}>
        <h2 className={styles.heading}>Trending</h2>
        {/* Select component */}
        {/* <FormControl sx={{ width: "100%", marginLeft: "auto" }}> */}
        <Select
          // defaultValue={"Sort by"}
          value={"sortby"}
          className={styles.select}
        >
          <MenuItem value={"sortby"}>Sort by</MenuItem>
          <MenuItem value={"week"}>This week</MenuItem>
          <MenuItem value={"month"}>This month</MenuItem>
          <MenuItem value={"year"}>This year</MenuItem>
        </Select>
        {/* </FormControl> */}
        {/* </Grid> */}
      </div>
        <Grid container className={styles["cards-cnt"]}>
          {cards.map((card, i) => {
            return (
              <Grid className={styles["card-grid"]} key={i * 3}>
                <Card
                  key={i}
                  name={titles[i]}
                  mediaUrl={card.mediaUrl}
                  price={card.price}
                  likes={card.likes}
                  currency={card.currency}
                  title={titles[i]}
                ></Card>
              </Grid>
            );
          })}
        </Grid>
    </Container>
  );
}
