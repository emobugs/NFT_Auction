import styles from "./Auctions.module.scss";

import { Container, Grid, FormControl, MenuItem, Select } from "@mui/material";
import Card from "../card/Card";
const titles = ['Clock', 'DOGE','BTC', 'Litecoin'];

export default function Auctions({ cards = [] }) {
  return (
    <Container className={styles.container} sx={{ width: "100%", margin: 0 }}>
      <div className={styles.top}>
      <h2 className={styles.heading}>Live Auctions</h2>
      {/* Select component */}
      <FormControl sx={{width: '300px' , marginLeft: 'auto'}}>
        <Select
          labelId="select"
          id="select"
          label="Today"
        >
          <MenuItem value={1}>Today</MenuItem>
          <MenuItem value={2}>This Week</MenuItem>
          <MenuItem value={3}>This Month</MenuItem>
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
