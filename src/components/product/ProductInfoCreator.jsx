import styles from "./ProductInfoCreator.module.scss"

import User from "../user/User"

export default function ProductInfoCreator({ name, avatar, verified = false}) {
  return (
    <div className={styles['product-info-creator']}>
        <h3 className={styles.title}>Creator</h3>
        <div className={styles['user-container']}>
            <User className={styles.user} name={name} avatar={avatar} verified={verified}></User>
        </div>
    </div>
  )
}
