import styles from "./ActivityListItem.module.scss"

import { formatDistance,  parseISO } from "date-fns"

import Avatar from "../avatar/Avatar"
import Link from "../link/Link"
import Stack from '@mui/material/Stack'

export default function ActivityListItem({user, created_at, nft, type = "like"}) {
    const action = () => {
        if(type === "like"){
            return "liked";
        } else if(type === "buy"){
            return "bought";
        }
    }
  return (
    <div>
        <Stack className={styles['list-item-stack']} direction="row" spacing={2}>
            <Avatar url={user.avatar.url} verified={user.verified}/>
            <Stack className={styles['info-stack']} direction="column">
                <p className={styles['info-par']}>{`${user.name} ${action()} "${nft.name}" by ${nft.owner.username}`}</p>
                <p className={styles['info-par']}>{formatDistance(new Date(parseISO(created_at)), new Date(), {addSuffix:true})}</p>
            </Stack>
        </Stack>
    </div>
  )
}
