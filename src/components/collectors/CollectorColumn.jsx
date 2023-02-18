import styles from "./CollectorColumn.module.scss"

import Collector from "./Collector";
import {useState} from 'react';


export default function CollectorColumn({ items }) {
  // const [firstLast, setFirstLast] = useState(items.length)


  return (
    <div className={styles.container}>
      {items.map((item, i) => {
        return <Collector
        className={styles.collector}
          name={item.name}
          avatar={item.avatar}
          verified={item.verified}
          id={item.id}
          type={i % 2 === 0 ? 'darker' : 'lighter'}
          nftsCount={item.nftsCount}
          // itemsCount={firstLast}
          key={i}
        ></Collector>;
      })}
    </div>
  );
}
