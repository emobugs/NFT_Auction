import styles from "./Trending.module.scss";

import { Container, Grid, FormControl, MenuItem, InputLabel, Select } from "@mui/material";
import Card from "../card/Card";
const titles = ['Clock', 'DOGE','BTC', 'Litecoin'];

export default function Trending({ cards = [] }) {
  return (
    <Container className={styles.trending} sx={{ width: "100%", margin: 0 }}>
      <div className={styles.top}>
      <h2 className={styles.heading}>Trending</h2>
      {/* Select component */}
      <FormControl sx={{width: '300px' , marginLeft: 'auto'}}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="Today"
        >
          <MenuItem value={20} selected>Today</MenuItem>
          <MenuItem value={10}>This Month</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </div>
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
              ></Card>
            </Grid>
          );
        })}
        {/* <Grid item md={3}>
                    <Card></Card>
                </Grid>
                <Grid item md={3}>
                    <Card></Card>
                </Grid>
                <Grid item md={3}>
                    <Card></Card>
                </Grid>
                <Grid item md={3}>
                    <Card></Card>
                </Grid> */}
      </Grid>
    </Container>
  );
}
