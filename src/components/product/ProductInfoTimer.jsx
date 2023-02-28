import styles from "./ProductInfoTimer.module.scss";

import Countdown from "react-countdown";
import { Grid } from "@mui/material";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
  const Completed = () => (
    <span className={styles.completed}>{onTimeEnd()}</span>
  );
  const renderer = ({ hours, minutes, seconds, completed }) => {
    console.log(completed);
    return completed ? (
      <Completed className={styles.completed} />
    ) : (
      <span className={styles.span}>
        {hours}:{minutes}:{seconds}
      </span>
    );
  };

  const renderComp = () => {
    return (
      <div className={styles["product-info-timer"]}>
        <Grid container direction={"column"} sx={{height: "100%" ,gap:"0"}} >
          <Grid item md={4}>
            <h3 className={styles.title}>Ends in</h3>
          </Grid>
          <Grid item md={8}>
            <div className={`${styles.timer}, ${styles.active}`}>
              <Countdown
                className={styles["timer-countdown"]}
                date={Date.now() + timeEnd}
                renderer={renderer}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  };

  return timeEnd ? renderComp() : <div className={styles["empty-timer"]}></div>;
}
