import styles from "./ProductContainer.module.scss";
import { Grid, Box, Container } from "@mui/material";
import classNames from "classnames";
import React from "react";
import ProductImage from "./ProductImage";
import ProductActions from "./ProductActions";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";

export default function ProductContainer({
  isLive,
  name,
  owner,
  price,
  currency,
  likes,
  auction_end,
  details,
  source,
  bids,
  buyAmount,
  bidAmount,
  onBuy,
  onBid
}) {
  return (
    <Container
      maxWidth={false}
      className={classNames(styles["product-container"])}
    >
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <ProductImage url={source?.url} />
        </Grid>
        <Grid item xs={5}>
          <ProductInfo
            title={name}
            creator={owner}
            price={price}
            currency={currency}
            likes={likes}
            timeEnd={auction_end}
            isLive={isLive}
            onTimeEnd={auction_end}
          />
          <ProductTabs bids={bids} text={details} />
          <ProductActions
            isLive={isLive}
            currency={currency}
            buyAmount={buyAmount}
            bidAmount={bidAmount}
            onBid={onBid}
            onBuy={onBuy}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
