import styles from "./User.module.scss";

import Avatar from "../avatar/Avatar";

export default function User({
  name = "",
  info = "",
  avatar = "",
  size = 50,
  verified = false,
}) {
  return (
    <div className={styles.user}>
      <Avatar size={size} url={avatar} verified={verified}/>
      <div className={styles["user-data"]}>
        <h2 className={styles.name}>{name}</h2>
        {info ? (<p className={styles.info}>{`${info} items`}</p>) : ""}
      </div>
    </div>
  );
}
