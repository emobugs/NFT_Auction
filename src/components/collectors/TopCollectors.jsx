import styles from "./TopCollectors.module.scss";

import { useState, useEffect } from "react";

import chunk from "lodash/chunk";
import { Grid, FormControl, Select, MenuItem } from "@mui/material";

import Collector from "./Collector";
import CollectorColumn from "./CollectorColumn";
import nextId from "react-id-generator";

export default function TopCollectors({ collectors }) {
  const [collectorsList, setCollectorsList] = useState();
  const [number, setNumber] = useState(1);

  const reactId = nextId();

  const chunkCollectors = () => {
    const collectorsL = collectors.map((c, i) => {
      return (
        <Collector
          name={c.name}
          nftsCount={c.nftsCount}
          avatar={c.avatar}
          verified={c.verified}
          id={i + 1}
        ></Collector>
      );
    });
    setCollectorsList(chunk(collectorsL, 3));
    // return chunk(collectorsL, 3);
  };

  useEffect(() => {
    chunkCollectors();
  }, []);

  return (
      <Grid className={styles.container} container >
        <Grid className={styles.top} container >
          <Grid item md={10}>
            <h1 className={styles.heading}>Top Collectors</h1>
          </Grid>
          <Grid className={styles.gridSel} item md={2}>
            <FormControl sx={{ width: "100%", marginLeft: "auto" }}>
              <Select className={styles.selectEl} labelId="select" id="select" label="Today">
                <MenuItem value={"1"}>Today</MenuItem>
                <MenuItem value={"2"}>This Week</MenuItem>
                <MenuItem value={"3"}>This Month</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container direction="row">
          {
            // console.log(collectorsList)
            collectorsList?.map((innerList, i) => {
              return (
                <Grid className={styles.gridContainer} item md={4} key={i}>
                  <CollectorColumn
                    items={innerList.map((list) => {
                      return list.props;
                    })}
                  ></CollectorColumn>
                </Grid>
              );
            })
          }
        </Grid>
      </Grid>
  );

  //   TopCollectors.PropTypes = {
  //     collectors : PropTypes.array
  //   }
}
