import styles from "./ProfileCollectionFilters.module.scss"
import classNames from 'classnames'

import { FormControl, Select, InputLabel, MenuItem, Stack, TextField, InputAdornment, Typography } from "@mui/material"
import { Search } from "@mui/icons-material"

export default function ProfileCollectionFilters({filters}) {
  return (
    <div className={classNames(styles['profile-collection-filters'])}>
        {/* {
sort: [
  { label: "Name (Ascending)", value: 1 },
  { label: "Name (Descending)", value: 2 },
],
price: [
  { label: "0.3 - 0.5 ETH", value: 3 },
  {
    label: "0.5 - 2 ETH",
    value: 4,
  },
  {
    label: "2- 3 ETH",
    value: 5,
  },
],
} */}
        <Stack>
            <Typography variant="h1">Collection</Typography>
        <FormControl>
            <InputLabel id="select-sort-label">Sort By</InputLabel>
            <Select
            labelId="select-sort-label"
            id="select-sort"
            value=""
            ></Select>
        </FormControl>
        <FormControl>
            <Select></Select>
        </FormControl>
        <FormControl>
            <TextField/>
        </FormControl>
        </Stack>
    </div>
  )
}
