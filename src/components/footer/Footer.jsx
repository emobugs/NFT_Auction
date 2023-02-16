import styles from "./Footer.module.scss";

import Logo from "../logo/Logo";

import { Grid, Button, Container } from "@mui/material";

export default function Footer() {
  return (
    // <div className={styles.wrapper}>
    //   <Container className={styles.container} maxWidth="false">
    //     <Grid container direction="row" alignItems="center" justifyContent="center">
    //       <Grid className={styles.logoGrid} item md={4}>
    //         <Logo className={styles.logo} type="muted" />
    //       </Grid>
    //       <Grid className={styles.inputGrid} item md={4}>
    //         <p className={styles.text}>Emo All Aights Reserved 2023</p>
    //       </Grid>
    //       <Grid className={styles.buttonsGrid} item md={4} >
    //         <Button className={styles.button} variant="text">
    //           Privacy Policy
    //         </Button>
    //         <Button className={styles.button} variant="text">
    //           Cookie Policy
    //         </Button>
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </div>
    <div className={styles.wrapper}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item md={2}>
          <Logo className={styles.logo} />
        </Grid>
        <Grid item md={4}>
          {/* <TextField
            id="input-search"
            placeholder="Find items, users and activities"
            className={styles.TextField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          /> */}
          <p>Copyright</p>
        </Grid>
        <Grid
          container
          item
          md={4}
          flexDirection="row"
          className={styles.container}
        >
          <Button className={styles['btn-nav']}>Home</Button>
          <Button className={styles['btn-nav']}>Activity</Button>
          <Button variant="contained" className={styles['btn-nav','btn-nav-exp']}>Explore</Button>
        </Grid>
      </Grid>
    </div>
  );
}
