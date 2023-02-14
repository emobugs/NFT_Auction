import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";

import User from "../user/User";

export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <User name="terika88" info="132 items" avatar="./images/avatar.png" size="200"/>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Paper className={classNames(styles.paper)}>
          <Link href="/about" color="secondary">  
            Hi
          </Link>
        </Paper>
      </Container>
    </div>
  );
}
