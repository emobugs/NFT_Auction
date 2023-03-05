import React from "react";
import Logo from "../logo/Logo";
import { Grid, Container, Button } from "@mui/material";

import styles from "./Footer.module.scss";
import SearchIcon from "@mui/icons-material/Search";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container} maxWidth="false">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid className={styles.logoGrid} item xs={4}>
            <Logo type="muted" />
          </Grid>
          <Grid className={styles.inputGrid} item xs={4}>
            <p className={styles.text}>
              EMO All rights reserved{" "}
            </p>
          </Grid>
          <Grid className={styles.buttonGrid} item xs={4}>
            <Button className={styles.textBtn} variant="text">
              Privacy policy
            </Button>
            <Button className={styles.textBtn} variant="text">
              Cookie policy
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
