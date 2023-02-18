import styles from "./CollectorColumn.module.scss"

import Collector from "./Collector";
import {useState} from 'react';


export default function CollectorsColumn({ items, num }) {
  const [firstLast, setFirstLast] = useState(items.length)


  return (
    <div className={styles.container}>
      {items.map((item, i) => {
        const backG = (i + 1) % 2 === 0 ? 'lighter' : 'darker';
        return <Collector
        className={styles.collector}
          name={item.name}
          avatar={item.avatar}
          verified={item.verified}
          id={item.id}
          type={backG}
          nftsCount={item.nftsCount}
          itemsCount={firstLast}
          key={i}
        ></Collector>;
      })}
    </div>
  );
}
