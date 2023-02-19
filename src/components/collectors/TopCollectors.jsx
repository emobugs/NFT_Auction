import styles from "./TopCollectors.module.scss";
import { Select, MenuItem, Container, Grid } from "@mui/material";
import CollectorColumn from "./CollectorColumn";
import _ from "lodash";
export default function TopCollectors({ collectors = [] }) {
  collectors.map((item, index) => (item.id = index + 1));
  return (
      <Container maxWidth={false} className={styles.container}>
        <div className={styles.top}>
          <h1 className={styles.title}>Top Collectors</h1>
          <Select
            defaultValue={"sortby"}
            value={"sortby"}
            className={styles.select}
          >
            <MenuItem value={"sortby"}>Sort by</MenuItem>
            <MenuItem value={"week"}>This week</MenuItem>
            <MenuItem value={"month"}>This month</MenuItem>
            <MenuItem value={"year"}>This year</MenuItem>
          </Select>
        </div>
        <Grid container className={styles['collectors-cnt']}>
          {_.chunk(collectors, 3).slice(0,4).map((item, i) => (
            <Grid className={styles['collector']} key={i}>
              <CollectorColumn items={item} key={i * 3} />
            </Grid>
          ))}
        </Grid>
      </Container>
  );
}
