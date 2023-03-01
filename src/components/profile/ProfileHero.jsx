import styles from "./ProfileHero.module.scss"

import classNames from 'classnames'

export default function ProfileHero({image}) {
  return (
    <div className={classNames(styles['profile-hero'])}>
      <img className={classNames(styles['image'])} src= {image} alt="profile_hero_image" />
    </div>
  )
}
