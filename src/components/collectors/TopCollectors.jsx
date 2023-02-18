import styles from "./TopCollectors.module.scss";

import _ from "lodash";
import { Grid, FormControl, Select, MenuItem, Container } from "@mui/material";

import CollectorColumn from "./CollectorColumn";

export default function TopCollectors({ collectors = [] }) {
  collectors.map((item, index) => (item.id = index + 1));

  return (
    <Container className={styles.top} maxWidth={false}>
      {/* <Grid item md={10}> */}
      <h1 className={styles.heading}>Top Collectors</h1>
      {/* </Grid> */}
      {/* <Grid className={styles.gridSel} item md={2}> */}
      <FormControl sx={{ width: "100%", marginLeft: "auto" }}>
        <Select
          className={styles.selectEl}
          labelId="select"
          id="select"
          label="Today"
          defaultValue="today"
        >
          <MenuItem value={"today"}>Today</MenuItem>
          <MenuItem value={"week"}>This Week</MenuItem>
          <MenuItem value={"month"}>This Month</MenuItem>
        </Select>
      </FormControl>
      {/* </Grid> */}
      <Container maxWidth={false}>
        <Grid className={styles.collectorsGrid} container>
          {_.chunk(collectors, 3).map((collector, i) => (
            <Grid key={i}>
              <CollectorColumn items={collector} key={i*3}></CollectorColumn>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}
