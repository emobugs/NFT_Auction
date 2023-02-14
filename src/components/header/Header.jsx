import Logo from "../logo/Logo";
import styles from "./Header.module.scss";
import classNames from "classnames";

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
          {/* <input          type="text"name="search"id="search-input"          className={classNames(styles['search-input2'])} placeholder="Find items, users and activities" /> */}
          {/* input field*/}
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
            <Button>Home</Button>
            <Button>Activity</Button>
            <Button>Explore</Button>
        </Grid>
      </Grid>
    </div>
  );
}
