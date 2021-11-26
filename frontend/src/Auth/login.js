import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Modal from "react-modal";
import Signup from "./SignUp";
import "./form.css";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { AuthenticateActions } from "../Components/ReduxToolkit/UserAuthenticate";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    height: "max-content",
    width: 380,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#12916f", color: "white" };
  const btnstyle = {
    padding: "8px 0px",
    margin: "8px  0",
    color: "White",
    backgroundColor: "#12916f",
  };

  const [values, setValues] = useState({
    Username: "",
    Password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleUsernameInputChange = (event) => {
    setValues({ ...values, Username: event.target.value });
  };
  const handlePasswordInputChange = (event) => {
    setValues({ ...values, Password: event.target.value });
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    if (values.Username && values.Password) {
      setValid(true);
      dispatch(AuthenticateActions.login());
      navigate("/");
      setValues({ Username: "", Password: "" });
    } else {
      setValid(false);
    }
    setSubmitted(true);
  };
  const [modalDetails, setModalDetails] = useState(false);

  const clickhandler = () => {
    if (modalDetails === false) {
      setModalDetails(true);
    } else {
      setModalDetails(false);
    }
  };

  const eye = <FontAwesomeIcon icon={faEye} />;
  const closeeye = <FontAwesomeIcon icon={faEyeSlash} />;
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <Grid>
      <Paper
        className="loginLayout"
        elevation={10}
        sx={{ position: "relative" }}
        style={paperStyle}
      >
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 className="signIn">Sign In</h2>
        </Grid>
        <form>
          <TextField
            style={{ margin: "10px  0px 10px 0px" }}
            onChange={handleUsernameInputChange}
            variant="outlined"
            // label="User Name"
            placeholder="Enter Username"
            value={values.Username}
            fullWidth
            required
          />
          {submitted && !valid && !values.Username ? (
            <span
              style={{
                color: "red",
                fontSize: "10px",
                position: "relative",
                top: "-8px",
                display: "grid",
              }}
            >
              Please enter the UserName
            </span>
          ) : null}

          <div className="pass-wrapper">
            <TextField
              style={{ margin: "10px  0px 10px 0px" }}
              variant="outlined"
              onChange={handlePasswordInputChange}
              placeholder="Enter Password"
              type={passwordShown ? "text" : "Password"}
              value={values.Password}
              fullWidth
              required
            />
            {passwordShown ? (
              <i onClick={togglePasswordVisiblity}>{closeeye}</i>
            ) : (
              <i onClick={togglePasswordVisiblity}>{eye}</i>
            )}
          </div>
          {submitted && !valid && !values.Password ? (
            <span
              style={{
                color: "red",
                fontSize: "10px",
                position: "relative",
                top: "-20px",
                display: "grid",
              }}
            >
              Please enter the Password
            </span>
          ) : null}

          <Button
            variant="contained"
            style={btnstyle}
            onClick={handleSubmit}
            fullWidth
          >
            Sign In
          </Button>
          <Modal isOpen={modalDetails}>
            <Signup onClick={clickhandler} />
          </Modal>
        </form>
        <Typography style={{ margin: "10px  0px 10px 0px" }}>
          <Link herf="#">Forget Password ?</Link>
        </Typography>

        <Typography>
          Do you Have an account?
          <Link style={{ cursor: "pointer" }} onClick={clickhandler} herf="#">
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
export default Login;
