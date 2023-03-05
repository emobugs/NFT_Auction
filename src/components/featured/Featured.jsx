import styles from "./Featured.module.scss";

import { Container, ImageList, ImageListItem } from "@mui/material";
import { useRouter } from "next/router";

export default function Featured({ items = [] }) {
  const router = useRouter();

  return (
    <Container className={styles.container} maxWidth={false}>
      <ImageList
        className={styles.imageList}
        sx={{ gridAutoFlow: "column" }}
        variant="quilted"
        cols={6}
        rows={2}
      >
        {items.map((item, i) => {
          let cols = i === 0 ? 3 : 1;
          let rows = i === 0 ? 2 : 1;
          return (
            // {console.log(item)}
            <ImageListItem
              className={styles.imageItem}
              key={i + 1}
              cols={item.cols || cols}
              rows={item.rows || rows}
            >
              <img
                className={styles.image}
                src={item.image}
                alt={item.title}
                loading="lazy"
                onClick={() =>
                  router.push(`product/${item.id}`)
                }
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Container>
  );
}
