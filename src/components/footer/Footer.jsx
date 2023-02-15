import styles from './Footer.module.scss'

import Logo from '../logo/Logo'

import {Grid, Button, Container} from '@mui/material'

export default function Footer(){

    return(
        <Grid container className={styles.container}>
            <Grid item md={4}><Logo type="muted"/></Grid>
            <Grid item md={4}><p className={styles.text}>Emo All Aights Reserved 2023</p></Grid>
            <Grid item md={4}>
                {/* <Container> */}
                    <Button href="#" item md={6} className={styles.button}>Privacy Policy</Button>
                    <Button href="#" item md={6} className={styles.button}>Cookie Policy</Button>
                {/* </Container> */}
            </Grid>
        </Grid>
    )
}
