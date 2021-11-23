import React from "react";
import Box from "@mui/material/Box";
import "./Header.css";
import Sidenav from "../SideNav/SideNav";
import logo from "./Logo.png";

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
<<<<<<< HEAD
        < Sidenav />
=======
        <AppBar className="header" position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "left" }}
            >
              XOR Forms 
            </Typography>
            <AiOutlineMenu className="icon" />
          </Toolbar>
        </AppBar>
>>>>>>> 3349734f7833157e6360ff0986335a5a08726b8a
      </Box>
    </>
  );
}

export default Header;
