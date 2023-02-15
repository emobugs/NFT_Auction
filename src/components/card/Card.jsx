import styles from "./Card.module.scss";
import { useState, useEffect } from "react";

import { Card as CardMui, Chip } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import millify from "millify";

import Avatar from "../avatar/Avatar";

import Countdown from "react-countdown";

export default function Card({
  title = "",
  name = "String",
  likes = 0,
  timeLeft = 0,
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
  const [live, setLive] = useState();
  const [liveClass, setLiveClass] = useState();
  const [liveBadge, setLiveBadge] = useState();

  const generateLive = () => {
    return (
      <div className={styles["live-image-cnt"]}>
        <img src={mediaUrl} alt="NFT image" className={styles.media} />
        <div className={styles.counter}>
          <Countdown date={Date.now(timeLeft)} classname={styles.counter} />
        </div>
        <div className={styles.badge}>
          <CircleIcon className={styles.icon} />
          <p>LIVE</p>
        </div>
      </div>
    );
  };
  useEffect(() => {
    if (timeLeft) {
      setLiveClass(`${styles.card} ${styles.live}`);
      setLiveBadge(generateLive);
    }
  }, []);

  return (
    <CardMui className={liveClass}>
      <Avatar url={user.avatar.url} className={styles.avatar} />
      {/* Live or normal card */}
      {timeLeft ? (
        liveBadge
      ) : (
        <img src={mediaUrl} alt="NFT image" className={styles.media} />
      )}
      <div className={styles.info}>
        <div className={styles["basic-info"]}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.price}>
            ~{price} {currency}
          </p>
        </div>
        <Chip
          variant="outlined"
          label={millify(likes)}
          className={styles.likes}
        />
      </div>
    </CardMui>
  );
}
