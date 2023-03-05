import styles from "./ProfileCollectionFilters.module.scss";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";

import { useState, useEffect } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
export default function ProfileCollectionFilters({ filters = [] }) {
  const [personName, setPersonName] = useState([]);
  const [filterSort, setFilterSort] = useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };



  return (
    <div className={styles["profile-collection-filters"]}>
      <Stack className={styles["flex"]} direction="row">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Sort by</InputLabel>
          <Select
            className={styles["select-sort"]}
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
          >
            {/* {filterSort && generateSortItems} */}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Price range</InputLabel>
          <Select
            className={styles["price-sort"]}
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
          >
            {/* {filterSort && generateSortItems} */}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 300}}>
          <TextField
            id="search-collections"
            className={styles["search-input"]}
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className={styles.icon} sx={{ color: "#fff" }} />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Stack>
    </div>
  );
}
