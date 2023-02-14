import styles from './Avatar.module.scss'

export default function Avatar({size, url, verified = false}){

    return(
        <div className={styles.avatar} style={{width: size+'px', height: size+'px'}}>
            <img src={url+''} alt="" className={styles.image}/>
            <img src="images/verified.svg" alt="badge" className={styles.badge}/>
        </div>

    )
}