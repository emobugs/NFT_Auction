import styles from "./ProfileUser.module.scss" 

import Avatar from "../avatar/Avatar"
import classNames from "classnames"
import { Typography } from "@mui/material"

export default function ProfileUser({name, info, avatar, verified}) {
  return (
    <div className={classNames(styles['profile-user'])}>
        <Avatar size={80} url={avatar} verified={verified}/>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="body1">{info}</Typography>
    </div>
  )
}
