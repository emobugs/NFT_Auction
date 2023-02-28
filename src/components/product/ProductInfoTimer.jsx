import styles from "./ProductInfoTimer.module.scss";

import Countdown from "react-countdown";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {


  const Completed = () => <span className={styles.completed}>{onTimeEnd()}</span>
  const renderer = ({ hours, minutes, seconds, completed }) => {
    console.log(completed);
    return completed ? (
      <Completed className={styles.completed}/>
    ) : (
      <span className={styles.span}>
        {hours}:{minutes}:{seconds}
      </span>
    );
  };

  const renderComp = () => {
    return (
      <div className={styles["product-info-timer"]}>
        <h3 className={styles.title}>Ends in</h3>
        <div className={`${styles.timer}, ${styles.active}`}>
          <Countdown className={styles.countdown} date={Date.now() + timeEnd}  renderer={renderer}/>
        </div>
      </div>
    );
  };

  return timeEnd ? renderComp() : <div className={styles['empty-timer']}></div>;
}
