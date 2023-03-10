import styles from "./TopCollectors.module.scss";
import { Select, MenuItem, Container, Grid } from "@mui/material";
import CollectorColumn from "./CollectorColumn";

import {useState} from 'react';
import _ from "lodash";
export default function TopCollectors({ collectors = [], filters=[] }) {
  collectors.map((item, index) => (item.id = index + 1));

  const [selectValue, setSelectValue] = useState('asc');

  const handleChange=(e)=>{
    setSelectValue(e.target.value);
  }

  return (
      <Container maxWidth={false} className={styles.container}>
        <div className={styles.top}>
          <h1 className={styles.title}>Top Collectors</h1>
          <Select
          defaultValue=""
            value={selectValue}
            onChange={handleChange}
            className={styles.select}
          >
            {filters.map((f,i) => {
              return (
                <MenuItem label={f.label} value={f.value} key={i}>{f.label} 
                </MenuItem>
              )
            })}
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
