import styles from "./ProductInfoTimer.module.scss";

import Countdown from "react-countdown";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {

  const renderer = ({ hours, minutes, seconds, completed }) => {
    return completed ? onTimeEnd : <span>{hours}:{minutes}:{seconds}</span>;

  };

  const renderComp = () => {
    return (
      <div className={styles["product-info-timer"]}>
        <h3 className={styles.title}>Ends in</h3>
        <div className={styles.timer}>
          <Countdown date={Date.now() + timeEnd} renderer={renderer}></Countdown>
        </div>
      </div>
    );
  };


  return timeEnd ? renderComp() : <div></div>;
}
