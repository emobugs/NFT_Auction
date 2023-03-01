import styles from "./ProfileHero.module.scss"

import classNames from 'classnames'
import { Container } from "@mui/material"

export default function Profile({image}) {
  return (
    <Container className={classNames(styles['profile-hero'])} maxWidth={false}>
      <img className={classNames(styles['image'])} src={image} alt="profile_hero_image" />
    </Container>
  )
}
