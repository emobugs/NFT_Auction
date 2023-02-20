import styles from "./ProductInfoStatus.module.scss";

import { Chip } from "@mui/material";

export default function ProductInfoStatus() {
  return (
    <div className={styles["product-info-status"]}>
      <Chip className={styles.status} />
    </div>
  );
}
