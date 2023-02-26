import styles from "./ProductActions.module.scss";

import { Grid, Button } from "@mui/material";
import classNames from "classnames";

export default function ProductActions({
  isLive,
  currency,
  buyAmount,
  bidAmount,
  onBuy,
  onBid,
}) {
  return (
    <div className={styles["product-actions"]}>
      <Grid container>
        <Grid item md={7}>
          <Button
            className={classNames({
              [styles["button"]]: true,
              [styles["button-buy"]]: true,
            })}
            disabled={!isLive}
            onClick={onBuy}
          >
            Buy for {buyAmount} {currency}
          </Button>
        </Grid>
        <Grid item md={5}>
          <Button
            className={classNames({
              [styles["button"]]: true,
              [styles["button-bid"]]: true,
            })}
            disabled={!isLive}
onClick={onBid}
          >
            Place Bid for {bidAmount} {currency}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
