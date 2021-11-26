import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardActionArea,
  Divider,
} from "@mui/material";
import "./Dashboard.css";
import { IoIosCreate } from "react-icons/io";
import { HiTemplate } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const navigateRoute = () => {
    if (!auth.isLoggedin) {
      navigate("login");
    } else {
      navigate("/");
    }
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid
          sx={{ display: "flex", justifyContent: "center" }}
          item
          xs={12}
          md={6}
        >
          <Card
            variant="outlined"
            elevation={1}
            sx={{
              border: "1px solid #12916f",
              display: "flex",
            }}
          >
            <CardActionArea onClick={navigateRoute}>
              <Typography
                sx={{
                  height: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#12916f",
                }}
                variant="h4"
              >
                <IoIosCreate />
              </Typography>
              <Divider />
              {auth.isLoggedin ? (
                <Typography
                  sx={{
                    paddingY: 1,
                    paddingX: 3,
                    backgroundColor: "#12916f",
                    color: "#ffffff",
                    textAlign: "center",
                  }}
                  variant="h6"
                >
                  Continue with form
                </Typography>
              ) : (
                <Typography
                  sx={{
                    paddingY: 1,
                    paddingX: 3,
                    backgroundColor: "#12916f",
                    color: "#ffffff",
                    textAlign: "center",
                  }}
                  variant="h6"
                >
                  Create New Form
                </Typography>
              )}
            </CardActionArea>
          </Card>
        </Grid>
        <Grid
          sx={{ display: "flex", justifyContent: "center" }}
          item
          xs={12}
          md={6}
        >
          <Card
            variant="outlined"
            elevation={1}
            sx={{
              border: "1px solid #12916f",
              display: "flex",
              alignItem: "center",
            }}
          >
            <CardActionArea>
              <Typography
                sx={{
                  height: 100,
                  display: "flex",
                  color: "#12916f",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                variant="h4"
              >
                <HiTemplate />
              </Typography>
              <Divider />

              <Typography
                sx={{
                  paddingY: 1,
                  paddingX: 3,
                  backgroundColor: "#12916f",
                  color: "#ffffff",
                  textAlign: "center",
                }}
                variant="h6"
              >
                Custom Templates
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
