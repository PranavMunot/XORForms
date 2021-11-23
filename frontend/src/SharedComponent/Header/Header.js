import React from "react";
import Box from "@mui/material/Box";
import "./Header.css";
import Sidenav from "../SideNav/SideNav";
import logo from "./Logo.png";

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        < Sidenav />
      </Box>
    </>
  );
}

export default Header;
