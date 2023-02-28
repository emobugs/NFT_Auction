import styles from "./ProductContainer.module.scss";

import { Container, Grid } from "@mui/material";

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
}) {
  return (
    <Container
      maxWidth={false}
      className={classNames(styles["product-container"])}
    >
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <ProductImage text={source?.url} />
        </Grid>
        <Grid item xs={5}>
          <ProductInfo
            title={name}
            creator={owner}
            price={price}
            currency={currency}
            likes={likes}
            timeEnd={auction_end}
            isLive={auction_end}
            onTimeEnd={auction_end}
          />
          <ProductTabs bids={bids} text={details} />
          <ProductActions
            isLive={auction_end}
            currency={currency}
            buyAmount={bids}
            bidAmount={bids}
            onBid={bids}
            onBuy={bids}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
