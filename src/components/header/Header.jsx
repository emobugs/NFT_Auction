import Logo from "../logo/Logo";
import styles from "./Header.module.scss";

import { Grid, TextField, InputAdornment, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item md={2}>
          <Logo className={styles.logo} />
        </Grid>
        <Grid item md={4}>
          <TextField
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
          />
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
