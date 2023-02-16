import styles from "./How.module.scss";
import PropTypes from "prop-types";
import Step from "./Step";

import { Container, Grid, Button } from "@mui/material";

export default function How({ title, description, items = [], link  }) {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <Grid className={styles.gridCnt} container direction="row">
          <Grid
            className={styles.howItWorks}
            container
            direction="column"
            alignItems="flex-start"
            justifyContent="center"
            item
            md={8}
          >
            <h1>How it works</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              quo placeat et dolore quis, blanditiis unde minima minus,
              voluptatem soluta porro numquam neque qui maxime. Id suscipit fuga
              cum non.
            </p>
            <Button href={link}>Learn more</Button>
          </Grid>
          <Grid className={styles.steps} item md={4} direction="column">
            {items.map((item, i) => {
              return (
                <Grid item md={4} className={styles.stepCnt}>
                  <Step
                    key={i}
                    number={item.number}
                    title={item.title}
                    description={item.description}
                  ></Step>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );

  How.PropTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
    items: [
      {
        title: PropTypes.string,
        description: PropTypes.string,
      },
    ],
    link: PropTypes.string,
  };
}
