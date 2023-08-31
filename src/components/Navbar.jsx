import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <h1
          style={{
            fontSize: ["1.5rem", "2.5rem"],
            color: "#fff",
            margin: "0",
            fontFamily: "'Crimson Pro', serif",
            "@media (max-width: 400px)": {
              visibility: "hidden",
            },
          }}
        >
          Media Verse
        </h1>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
