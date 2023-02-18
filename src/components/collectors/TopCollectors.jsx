import styles from "./TopCollectors.module.scss";

import nextId from "react-id-generator";

import chunk from "lodash/chunk";
import { Grid, FormControl, Select, MenuItem, Container } from "@mui/material";

import CollectorColumn from "./CollectorColumn";

export default function TopCollectors({ collectors = [] }) {
    const reactId = nextId();

  collectors.map((item, index) => (item.id = index + 1));

  return (
    <div className={styles.container}>
      <Container className={styles.top} container>
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
      </Container>
        <Grid className={styles.collectorsGrid} container direction="row">
          {chunk(collectors, 3).map((collectors, i) => {
            return (
              <Grid item md={3} key={reactId}>
                <CollectorColumn items={collectors}></CollectorColumn>
              </Grid>
            );
          })}
        </Grid>
    </div>
  );

  //   TopCollectors.PropTypes = {
  //     collectors : PropTypes.array
  //   }
}
