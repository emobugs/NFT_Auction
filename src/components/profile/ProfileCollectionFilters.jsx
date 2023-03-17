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
export default function ProfileCollectionFilters({ filters = {} }) {
  const [sortSelect, setSortSelect] = useState('');
  const [priceSelect, setPriceSelect] = useState('');

  const handleSortChange = (event) => {
    setSortSelect(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceSelect(event.target.value);
  };

  return (
    <div className={styles["profile-collection-filters"]}>
      <Stack className={styles["flex"]} direction="row">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Sort by</InputLabel>
          <Select
            defaultValue=""
            className={styles["select-sort"]}
            value={sortSelect}
            onChange={handleSortChange}
          >
            {Array.isArray(filters.sort) &&
              filters.sort.map((s, i) => (
                <MenuItem label={s.label} value={s.value} key={i}>
                  {s.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Price range</InputLabel>
          <Select
            defaultValue=""
            className={styles["price-sort"]}
            value={priceSelect}
            onChange={handlePriceChange}
          >
            {Array.isArray(filters.price) &&
              filters.price.map((p, i) => (
                <MenuItem label={p.label} value={p.value} key={i}>
                  {p.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 300, height: "100%" }}>
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
