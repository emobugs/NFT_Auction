import styles from "./TopCollectors.module.scss";

import chunk from "lodash/chunk";
import { Grid, FormControl, Select, MenuItem, Container } from "@mui/material";

import CollectorColumn from "./CollectorColumn";

export default function TopCollectors({ collectors = [] }) {
  collectors.map((item, index) => (item.id = index + 1));

  return (
    <Container className={styles.container} maxWidth={false}>
      <div className={styles.top}>
        <h2 className={styles.heading}>Top Collectors</h2>
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
      </div>
      <Container>
        <Grid container className={styles.collectorGrid} >
          {chunk(collectors, 3).map((collector, i) => {
            return (
              <Grid key={i} item md={3}>
                <CollectorColumn
                  className={styles.collectorColumn}
                  items={collector}
                  key={i * 3}
                ></CollectorColumn>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
}
