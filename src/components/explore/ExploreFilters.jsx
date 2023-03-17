import styles from "./ExploreFilters.module.scss";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import { InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";

import { useState, useEffect } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function ExploreFilters({ filters = [], sortNfts, priceRange }) {
  const [sortSelected, setSortSelected] = useState("");
  const [priceSelected, setPriceSelected] = useState("");
  const handleSortChange = (event) => {
    sortNfts(event.target.value);
    setSortSelected(event.target.value);
  };
  
  const handlePriceChange = (event) => {
    priceRange(event.target.value);
    setPriceSelected(event.target.value);
  };

  return (
    <div className={styles["explore-filters"]}>
      <Stack className={styles["flex"]} direction="row">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="select-sort-label">Sort by</InputLabel>
          <Select
            defaultValue=""
            className={styles["select-sort"]}
            value={sortSelected}
            onChange={handleSortChange}
          >{Array.isArray(filters['sort']) &&
              filters.sort.map((s, i) => {
                return (
                  <MenuItem label={s.label} value={s.value} key={i}>
                    {s.label}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="select-price-label">Price range</InputLabel>
          <Select
            defaultValue=""
            className={styles["select-type"]}
            labelId="select-price-label"
            id="select-price"
            value={priceSelected}
            onChange={handlePriceChange}
            variant="outlined"
            color="primary"
            input={<OutlinedInput label="Price" />}
          >
            {/* {Array.isArray(filters.price) && filters.price.map( => {})} */}
            {/* {console.log(typeof filters.price, Array.isArray(filters.price))} */}
            {Array.isArray(filters.price) &&
              filters.price.map((s, i) => (
                <MenuItem label={s.label} value={s.value} key={i}>
                  {s.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 300 }}>
          <TextField
            id="search-collections"
            className={styles["search-input"]}
            variant="standard"
            sx={{
              "& .MuiInputBase-root": {
                height: "100%",
              },
            }}
            InputProps={{
              variant: "standard",
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
