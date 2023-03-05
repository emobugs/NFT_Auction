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

export default function ExploreFilters({ filters = [] }) {
  const [filter, setFilter] = useState([]);
  const [filterSort, setFilterSort] = useState([]);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className={styles["explore-filters"]}>
      <Stack className={styles["flex"]} direction="row">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="select-sort-label">Sort by</InputLabel>
          <Select
            className={styles["select-sort"]}
            labelId="select-sort-label"
            id="select-sort"
            value={filter}
            onChange={handleChange}
            variant="outlined"
            color="primary"
            input={<OutlinedInput label="Sort by" />}
          >
            {/* {filterSort && generateSortItems} */}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="select-price-label">Price range</InputLabel>
          <Select
            className={styles["select-type"]}
            labelId="select-price-label"
            id="select-price"
            value={filter}
            onChange={handleChange}
            variant="outlined"
            color="primary"
            input={<OutlinedInput label="Price" />}
          >
            {/* {filterSort && generateSortItems} */}
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
