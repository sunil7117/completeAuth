import React from "react";
import "./searchbar.css";
import { Button, TextField } from "@mui/material";
const Searchbar = () => {
  return (
    <div className="searchbar">
      <TextField
        variant="outlined"
        size="small"
        sx={{ borderRadius: 0, flex: 2 }}
        className="text"
        fullWidth
      />
      <Button
        variant="contained"
        sx={{
          borderRadius: 0,
          flex: 0.5,
          background: "#9af30b",
          boxShadow: "none",
          "&:hover": { background: "#9af30b", boxShadow: "none" },
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default Searchbar;
