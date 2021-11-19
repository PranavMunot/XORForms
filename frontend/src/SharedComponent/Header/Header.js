import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AiOutlineMenu } from "react-icons/ai";
import "./Header.css";

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="header" position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "left" }}
            >
              XOR Forms | xor
            </Typography>
            <AiOutlineMenu className="icon" />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
