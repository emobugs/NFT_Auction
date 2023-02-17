import styles from "./Collector.module.scss";

import User from "../user/User";
import classNames from "classnames";

import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

export default function Collector({
  name,
  avatar,
  verified,
  type,
  id,
  nftsCount,
  itemsCount,
}) {
  const [bottomRadius, setBottomRadius] = useState();
  const [topRadius, setTopRadius] = useState();

  useEffect(() => {
    setBorderRad();
  }, []);

  const setBorderRad = () => {
    if (id === 1) {
      setTopRadius(true);
    } else if (id === itemsCount) {
      setBottomRadius(true);
    }
  };

  return (
    <div
      className={
        (classNames(styles.container, styles[type],
        styles[bottomRadius ? 'borderRad-bottom' : ""],
        styles[topRadius ? 'borderRad-up' : ""]
        ))
      }
    >
      <Grid
        className={styles.gridCnt}
        container
        direction="row"
        alignItems="center"
      >
        <Grid className={styles.numGrid} item md={3}>
          <div className={styles.numCnt}>
            <h1 className={styles.number}>{id}</h1>
          </div>
        </Grid>
        <Grid className={styles.userGrid} item md={9}>
          <User
            name={name}
            avatar={avatar}
            verified={verified}
            info={nftsCount}
          ></User>
        </Grid>
      </Grid>
    </div>
  );
}
