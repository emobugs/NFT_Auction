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
}) {
  const [backGround, setBackGround] = useState();
  useEffect(() => {
    setBackGround(type);
  }, []);

  return (
    <div className={classNames(styles.container, styles[type])}>
      <Grid container direction="row" alignItems="center">
        <Grid item md={2}>
            <div className={styles.numCnt}>
          <h1 className={styles.number}>{id}</h1>
            </div>
        </Grid>
        <Grid item md={8}>
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
