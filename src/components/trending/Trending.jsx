import styles from "./Trending.module.scss";
import { useState, useEffect, useRef } from "react";

import { Container, Grid, MenuItem, Select } from "@mui/material";
import Card from "../card/Card";

export default function Trending({ filters = {}, cards = [] }) {
  const [selectSort, setSelectSort] = useState(1);

  const handleChange = (e) => {
    setSelectSort(e.target.value);
  };

  return (
    <Container className={styles.container} maxWidth={false}>
      <div className={styles.top}>
        <h2 className={styles.heading}>Trending</h2>
        {/* Select component */}
        {/* <FormControl sx={{ width: "100%", marginLeft: "auto" }}> */}
        <Select
          defaultValue={1}
          value={selectSort}
          className={styles.select}
          onChange={handleChange}
        >
          {Array.isArray(filters.sort) && filters.sort.map((f, i) => {
            return (
              <MenuItem label={f.label} value={f.value} key={i}>
                {f.label}
              </MenuItem>
            );
          })}
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
                mediaUrl={card.mediaUrl}
                price={card.price}
                likes={card.likes}
                currency={card.currency}
                title={card.name}
                user={card.owner}
              ></Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
