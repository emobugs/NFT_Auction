import styles from "./Footer.module.scss";

import Logo from "../logo/Logo";

import { Grid, Button, Container } from "@mui/material";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item md={4}>
          <Logo className={styles.logo} type="muted" />
        </Grid>
        <Grid item md={4}>
          <p className={styles.text}>Emo All Aights Reserved 2023</p>
        </Grid>
        <Grid item md={4}>
          <Button href="#" item md={6} className={styles.button}>
            Privacy Policy
          </Button>
          <Button href="#" item md={6} className={styles.button}>
            Cookie Policy
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
