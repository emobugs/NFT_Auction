import styles from "./Footer.module.scss";

import Logo from "../logo/Logo";

import { Grid, Button, Container } from "@mui/material";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <Grid container direction="row" alignItems="center" justifyContent="center">
          <Grid item md={4} className={styles.logoGrid}>
            <Logo className={styles.logo} type="muted" />
          </Grid>
          <Grid className={styles.inputGrid} item md={4}>
            <p className={styles.text}>Emo All Aights Reserved 2023</p>
          </Grid>
          <Grid className={styles.buttonsGrid} item md={4} >
            <Button className={styles.button} variant="text">
              Privacy Policy
            </Button>
            <Button className={styles.button} variant="text">
              Cookie Policy
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
