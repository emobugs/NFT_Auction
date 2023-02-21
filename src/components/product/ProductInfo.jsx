import styles from "./ProductInfo.module.scss";

import ProductInfoTitle from "./ProductInfoTitle";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoTimer from "./ProductInfoTimer";

import { Stack, Grid } from "@mui/material";

export default function ProductInfo({
  title,
  creator,
  price,
  currency,
  likes,
  onTimeEnd,
  timeEnd,
  isLive,
}) {
  return (
    <div className={styles["product-info"]}>
      <ProductInfoTitle text={title}></ProductInfoTitle>
      {isLive && <ProductInfoStatus></ProductInfoStatus>}
      <Stack className={styles.stats} direction={"row"}>
        <ProductInfoPrice
          className={styles.price}
          currency={currency}
        ></ProductInfoPrice>
        <ProductInfoLikes className={styles.likes}></ProductInfoLikes>
      </Stack>
      <Grid container>
        <Grid item md={7}>
          <ProductInfoCreator
            name={creator.name}
            avatar={creator.avatar}
            verified={creator.verified}
          ></ProductInfoCreator>
        </Grid>
        <Grid item md={5}>
          <ProductInfoTimer
            timeEnd={timeEnd}
            onTimeEnd={onTimeEnd}
          ></ProductInfoTimer>
        </Grid>
      </Grid>
    </div>
  );
}
