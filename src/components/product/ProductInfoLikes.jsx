import styles from "./ProductInfoLikes.module.scss";

import millify from "millify";
import { Chip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ProductInfoLikes({ amount = 0 }) {
  return (
    <div className={styles["product-info-likes"]}>
      <Chip
        className={styles.likes}
        label={millify(amount)}
        icon={<FavoriteIcon className={styles["fav-icon"]} />}
        variant="outlined"
      />
    </div>
  );
}
