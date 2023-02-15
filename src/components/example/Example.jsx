import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";

import Card from "../card/Card";
import LiveCard from "../liveCard/LiveCard";

export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>

<Card tile="setaa" currency="stotinki" likes={2500}  title="prodavam jigula" mediaUrl="./images/nft.jpg"
   timeLeft="20"></Card>
   <LiveCard></LiveCard>
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
