import styles from "./ProfileCollection.module.scss";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ProfileCollectionFilters from "./ProfileCollectionFilters";
import Card from "../card/Card";

export default function ProfileCollection({ user, filters, items }) {
  return (
    <div className={styles["profile-collection"]}>
      <Container maxWidth={false}>
        <Grid container direction="column">
          <Grid container item direction="row">
            <Grid item xs={3} md={3}>
              <Typography variant="h3">Collection</Typography>
            </Grid>
            <Grid item xs={9} md={9}>
              <ProfileCollectionFilters filters={filters} />
            </Grid>
          </Grid>
          <Grid container item spacing={1}>
            {items.map((item, i) => {
              return (
                <Grid item xs={3} key={i}>
                  <Card user={user} title={item.title} currency={item.currency} likes={item.likes} mediaUrl={item.mediaUrl} timeLeft={item.timeLeft}/>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
