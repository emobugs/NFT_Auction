import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";

import Auctions from "../auctions/Auctions";

export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
   <Auctions cards = {[
      {
         "name":"Ivy",
         "user":{
            "avatar":{
               "url":"images/avatar.png"
            },
            "verified":true
         },
         "mediaUrl":"images/nft.jpg",
         "price":1,
         "currency":"ETH"
      },
      {
         "name":"Judie",
         "user":{
            "avatar":{
               "url":"images/avatar.png"
            },
            "verified":true
         },
         "mediaUrl":"images/nft.jpg",
         "price":2.3,
         "currency":"ETH"
      },
      {
         "name":"Juniper",
         "user":{
            "avatar":{
               "url":"images/avatar.png"
            },
            "verified":true
         },
         "mediaUrl":"images/nft.jpg",
         "price":5,
         "currency":"ETH"
      },
      {
         "name":"Maple",
         "user":{
            "avatar":{
               "url":"images/avatar.png"
            },
            "verified":true
         },
         "mediaUrl":"images/nft.jpg",
         "price":10,
         "currency":"ETH"
      }]}></Auctions>
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
