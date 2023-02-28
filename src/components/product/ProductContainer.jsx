import styles from "./ProductContainer.module.scss";

import { Grid } from "@mui/material";

import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import ProductActions from "./ProductActions";

import classNames from "classnames";

export default function ProductContainer({
  name,
  owner,
  price,
  currency,
  likes,
  auction_end,
  onTimeEnd,
  details,
  source,
  bids,
  isLive,
  buyAmount,
  bidAmount,
  onBuy,
  onBid,
  text
}) {
  return (
    <div className={classNames({ [styles["product-container"]]: true })}>
      <Grid className={styles["grid-cnt"]} container gridAutoFlow={true}>
        <Grid item md={6} xs={6}>
          <ProductImage url={source.url}></ProductImage>
        </Grid>
        <Grid item md={5} xs={5}>
          <ProductInfo
            title={name}
            creator={owner}
            price={price}
            currency={currency}
            likes={likes}
            timeEnd={auction_end}
            isLive={true}
            onTimeEnd={onTimeEnd}
          ></ProductInfo>
          <ProductTabs bids={bids}></ProductTabs>
          <ProductActions
            isLive={isLive}
            currency={currency}
            buyAmount={price}
            bidAmount={bidAmount}
            onBid={onBid}
            onBuy={onBuy}
            text={text}
          ></ProductActions>
        </Grid>
      </Grid>
    </div>
  );
}
