import styles from "ActivityList.module.scss";

import { Stack } from "@mui/material";
import ActivityListItem from "./ActivityListItem";

export default function ActivityList({ items }) {
  return (
    <div className={styles["activity-list"]}>
      <Stack direction="column" spacing={2}>
        {items.map((item, i) => {
          const { user, created_at, nft, type } = item;
          return (
            <ActivityListItem
              user={user}
              created_at={created_at}
              nft={nft}
              type={type}
              key={i}
            />
          );
        })}
      </Stack>
    </div>
  );
}
