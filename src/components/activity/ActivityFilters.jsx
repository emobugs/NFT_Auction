import styles from "./ActivityFilters.module.scss";
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

export default function ActivityFilters({ filters = {} }) {
  const [sortSelect, setSortSelect] = useState('');
  const [typeSelect, setTypeSelect] = useState('');

  const handleSortChange = (e) => {
    setSortSelect(e.target.value);
  };

  const handleTypeChange = (e) => {
    setTypeSelect(e.target.value);
  };

  return (
    <div className={styles["activity-filters"]}>
      <Stack className={styles["flex"]} direction="row">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="select-sort-label">Sort by</InputLabel>
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
          <InputLabel id="select-type-label">Type</InputLabel>
          <Select
          defaultValue=""
            className={styles["select-type"]}
            value={typeSelect}
            onChange={handleTypeChange}
          >
             {Array.isArray(filters.sort) &&
              filters.type.map((s, i) => (
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
