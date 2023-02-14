import styles from "./Card.module.scss";

import { Card as CardMui, Chip } from "@mui/material";
import millify from "millify";

import Avatar from "../avatar/Avatar";

export default function Card({
  name = "String",
  likes = 0,
  mediaUrl = "String",
  user = {
    avatar: {
      url: "String",
    },
    verified: false,
  },
  price = 5,
  currency = "",
}) {
  return (
    <CardMui className={styles.card}>
      <Avatar url="./images/avatar.png" size={80} className={styles.avatar} />
      <img src={mediaUrl} alt="NFT image" className={styles.media} />
      <div className={styles.info}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.price}>~{price} {currency}</p>
        <Chip label={millify(likes)} className={styles.likes}/>
      </div>
    </CardMui>
  );
}
