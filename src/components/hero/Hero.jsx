import styles from "./Hero.module.scss"

import { Typography } from "@mui/material"
import classNames from 'classnames'

export default function Hero({text}) {
  return (
    <div className={classNames(styles['hero'])}>
        <Typography className={classNames(styles['text'])} variant='h1'>{text}</Typography>
    </div>
  )
}
