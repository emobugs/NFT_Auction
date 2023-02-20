import Logo from "../logo/Logo";
import styles from "./Header.module.scss";

import { Grid, TextField, InputAdornment, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <Grid container className={styles['grid-cnt']}>
        <Grid item md={2}>
          <Logo className={styles.logo} />
        </Grid>
        <Grid item md={6}>
          <TextField
            id="input-search"
            placeholder="Find items, users and activities"
            className={styles['search-input']}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className={styles.icon}/>
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
          className={styles.buttons}
        >
          <Button className={styles["btn-nav"]}>Home</Button>
          <Button className={styles["btn-nav"]}>Activity</Button>
          <Button
            variant="contained"
            className={styles[("btn-nav", "btn-nav-exp")]}
          >
            Explore
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
