import styles from "./Avatar.module.scss";

export default function Avatar({ size = 50, url, verified = false }) {
  return (
    <div
      className={styles.avatar}
      style={{ width: size + "px", height: size + "px" }}
    >
      <img src={url} alt="profile_avatar" className={styles.image}/>
      {verified && (
        <img src="images/verified.svg" alt="badge" className={styles.badge} />
      )}
    </div>
  );
}
