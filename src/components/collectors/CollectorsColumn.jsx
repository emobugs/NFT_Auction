import styles from "./CollectorsColumn.module.scss"

import Collector from "./Collector";

export default function CollectorsColumn({ items }) {
  return (
    <div className={styles.container}>
      {items.map((item, i) => {
        const backG = (i + 1) % 2 === 0 ? 'lighter' : 'darker';
        return <Collector
          name={item.name}
          avatar={item.avatar}
          verified={item.verified}
          id={item.id}
          type={backG}
          nftsCount={item.nftsCount}
        ></Collector>;
      })}
    </div>
  );
}
