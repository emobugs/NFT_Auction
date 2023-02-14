import styles from './User.module.scss'

import Avatar from '../avatar/Avatar'

export default function User({name ='', info = '', avatar = '', 
size = 55, verified = false}){

    return(
        <div className={styles.user}>
            <Avatar size = {size} url={avatar}/>
            <div className={styles["user-data"]}>
            <h2 className={styles["user-name"]}>{name}</h2>
            <p className={styles["user-info"]}>{info}</p>
            </div>
        </div>
    )
}