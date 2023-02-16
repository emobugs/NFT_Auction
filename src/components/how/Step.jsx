import styles from "./Step.module.scss";
import PropTypes from "prop-types";

import { Grid } from "@mui/material";

export default function Step({number, title, description}) {
  return (
    <div className={styles.wrapper}>
      <Grid className={styles.container} container direction="row" >
        <Grid className={styles.number} item md={4}>
          <div>
          {number}
          </div>
        </Grid>
        <Grid className={styles.textGrid} item md={8}>
            <h3>{title}</h3>
            <p>
                {description}
            </p>
        </Grid>
      </Grid>
    </div>
  );

  Step.PropTypes = {
    number: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  };
}
