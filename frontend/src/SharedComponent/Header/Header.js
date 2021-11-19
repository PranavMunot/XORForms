import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { BiMenu } from "react-icons/bi";
import "./Header.css";

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "left", marginLeft: 2 }}
            >
              XOR Forms
            </Typography>
            <BiMenu className="icon" />
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
