import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";

export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
          <Avatar size="200" url="/images/avatar.png"/>
        <Paper className={classNames(styles.paper)}>
          <Link href="/about" color="secondary">  
            Hi
          </Link>
        </Paper>
      </Container>
    </div>
  );
}
