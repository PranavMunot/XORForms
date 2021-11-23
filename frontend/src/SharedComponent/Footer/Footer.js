import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar class="footerSet" position="static">
          <Toolbar>
            <Typography
              variant="body"
              component="div"
              sx={{ flexGrow: 1, textAlign: "left", color:"white" }}
            >
              &copy; All rights reserved with XOR FORMS 2021
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Footer;
