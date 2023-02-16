import styles from "./Featured.module.scss";

import { Container, ImageList, ImageListItem } from "@mui/material";
import { useRouter } from "next/router";

export default function Featured({ items = [] }) {
  const router = useRouter();

  return (
      <Container className={styles.container} maxWidth={false}>
        <ImageList
          className={styles.imageList}
        //   sx={{ gridAutoFlow: "column" }}
          variant="quilted"
          cols={6}
          rows={2}
        >
          {items.map((item, i) => (
            <ImageListItem
              className={styles.imageItem}
              key={i + 1}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                className={styles.image}
                src={item.image}
                alt={item.title}
                loading="lazy"
                onClick={() => router.push(item.href)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
  );
}
