import styles from "./ProductInfoLikes.module.scss"

import millify from "millify"
import { Chip } from "@mui/material"

export default function ProductInfoLikes({ amount = 0 }) {
  return (
    <div className={styles['product-info-likes']}>
        <Chip className={styles.likes} label={millify(amount)} variant="outlined"/>
    </div>
  )
}
