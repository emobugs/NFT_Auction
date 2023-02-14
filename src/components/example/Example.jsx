import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";

// import Card from "../card/Card";


export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      {/* <Card name="Suspect of change" price={10} likes={120054534000} mediaUrl='./images/nft.jpg'></Card> */}
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
