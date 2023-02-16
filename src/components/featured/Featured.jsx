import "./Featured.module.scss";

import { Container, ImageList } from "@mui/material";
import { useRouter } from "next/router";

export default function Featured({ items = [] }) {
  return (
    <div className={style.wrapper}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {items.map((item) => (
          <ImageListItem key={item.image} cols={item.cols || 1} rows={item.rows || 1}>
            <img 
            {...srcset(item.image, 164, item.rows, item.cols)}
            src={item.image} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
