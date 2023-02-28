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
      <Stack className={styles.stats} direction={"row"}>
        <ProductInfoPrice
          className={styles.price}
          amount={price}
          currency={currency}
          ></ProductInfoPrice>
          <Stack className={styles['live-likes-stack']} direction={"row"}>
          {isLive && <ProductInfoStatus></ProductInfoStatus>}
        <ProductInfoLikes className={styles.likes} amount={likes}></ProductInfoLikes>
          </Stack>
      </Stack>
      <Grid className={styles['product-creator-grid']} container gridAutoColumns={true}>
        <Grid className={styles['product-creator-item']} item md={7} xs={7}>
          <ProductInfoCreator
            name={creator.username}
            avatar={creator.avatar}
            verified={creator.verified}
          ></ProductInfoCreator>
        </Grid>
        <Grid className={styles['product-creator-item']} item md={5} xs={5}>
          <ProductInfoTimer
            timeEnd={timeEnd}
            onTimeEnd={onTimeEnd}
          ></ProductInfoTimer>
        </Grid>
      </Grid>
    </div>
  );
}
