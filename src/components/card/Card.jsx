import styles from "./Card.module.scss";

import { Card as CardMui, Chip } from "@mui/material";
import millify from "millify";

import Avatar from "../avatar/Avatar";

export default function Card({
  name = "String",
  likes = "Number",
  mediaUrl = "String",
  user = {
    avatar: {
      url: "String",
    },
    verified: "Boolean",
  },
  price = "String",
  currency = "String",
}) {
  return (
    <CardMui className={styles.card}>
      <Avatar url="./images/avatar.png" size={80} className={styles.avatar} />
      <img src={mediaUrl} alt="NFT image" className={styles.media} />
      <div className={styles.info}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.price}>{price}</p>
        <Chip variant="outlined" label={millify(likes, { precision: 1 })} />
      </div>
    </CardMui>
  );
}
