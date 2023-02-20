import styles from "./ProductInfoTitle.module.scss";

import { Typography } from "@mui/material";

export default function ProductInfoTitle({ text }) {
  return (
    <div className={styles['product-info-title']}>
      <Typography className={styles.title} variant="h1">{text}</Typography>
    </div>
  );
}
