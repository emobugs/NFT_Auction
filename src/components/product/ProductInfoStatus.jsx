import styles from "./ProductInfoStatus.module.scss";

import { Chip } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function ProductInfoStatus() {
  return (
    <div className={styles["product-info-status"]}>
      <Chip
        className={styles.status}
        label="LIVE"
        icon={<CircleIcon className={styles["circle-icon"]} />}
      />
    </div>
  );
}
