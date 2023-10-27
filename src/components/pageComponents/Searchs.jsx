import { Search } from "@mui/icons-material";
import { IconButton, InputBase } from "@mui/material";
import React from "react";
import "./searchs.css";
const Searchs = () => {
  return (
    <div className="search">
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
        fullWidth
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <Search />
      </IconButton>
    </div>
  );
};

export default Searchs;
