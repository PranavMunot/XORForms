import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./form.css";
import SaveIcon from "@material-ui/icons/Save";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Signup = (props) => {
  const paperStyle = {
    padding: "20px",
    height: "max-content",
    width: 380,
    margin: "30px auto",
  };
  const headerStyle = { margin: 0, color: "#12916f" };
  const avatarStyle = { backgroundColor: "#12916f" };
  const marginTop = { marginTop: 8 };
  const btnstyle = {
    padding: "8px",
    margin: "10px  0px",
    color: "white",
    backgroundColor: "#12916f",
  };

  const [values, setValues] = useState({
    Name: "",
    Email: "",
    Gender: "",
    PhoneNumber: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [visibilityHandler, setVisiblityHandler] = useState(false);

  const [phoneValidate, setPhoneValidate] = useState(false);

  useEffect(() => {
    if (values.Password === values.ConfirmPassword) {
      setVisiblityHandler(false);
    } else {
      setVisiblityHandler(true);
    }
  }, [values.ConfirmPassword, values.Password]);

  useEffect(() => {
    if (values.PhoneNumber.length === 10) {
      setPhoneValidate(false);
    } else if (values.PhoneNumber.length) {
      setPhoneValidate(true);
    }
  }, [values.PhoneNumber]);

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({ ...values, Name: event.target.value });
  };

  const handleEmailInputChange = (event) => {
    setValues({ ...values, Email: event.target.value });
  };
  const handleGenderInputChange = (event) => {
    setValues({ ...values, Gender: event.target.value });
  };

  const handlePhoneNumberInputChange = (event) => {
    setValues({ ...values, PhoneNumber: event.target.value });
  };
  const handlePasswordInputChange = (event) => {
    setValues({ ...values, Password: event.target.value });
  };
  const handleConfirmPasswordInputChange = (event) => {
    setValues({ ...values, ConfirmPassword: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.Name &&
      values.Email &&
      values.Gender &&
      values.Gender &&
      values.PhoneNumber &&
      values.Password &&
      values.ConfirmPassword &&
      !phoneValidate &&
      !visibilityHandler
    ) {
      setValid(true);
      setValues({
        Name: "",
        Email: "",
        Gender: "",
        PhoneNumber: "",
        Password: "",
        ConfirmPassword: "",
      });
    } else {
      setValid(false);
    }
    setSubmitted(true);
  };

  const eye = <FontAwesomeIcon icon={faEye} />;
  const closeeye = <FontAwesomeIcon icon={faEyeSlash} />;

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // const clickHandler = () => {
  //   props.onClick
  // };

  return (
    <Grid>
      <Paper className="signupLayout" elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 className="signupp" style={headerStyle}>
            Sign Up
          </h2>
          <Typography variant="caption" gutterBottom></Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            onChange={handleNameInputChange}
            label="Full Name"
            value={values.Name}
            variant="outlined"
            style={{ margin: "8px  0px 8px 0px" }}
          />
          {submitted && !valid && !values.Name ? (
            <span
              style={{
                color: "red",
                fontSize: "12px",
                position: "relative",
                top: "-10px",
              }}
            >
              Please enter a Name*
            </span>
          ) : null}
          <TextField
            fullWidth
            onChange={handleEmailInputChange}
            label="Email"
            value={values.Email}
            variant="outlined"
            style={{ margin: "8px  0px 8px 0px" }}
          />
          {submitted && !valid && !values.Email ? (
            <span
              style={{
                color: "red",
                fontSize: "12px",
                position: "relative",
                top: "-4px",
                display: "grid",
              }}
            >
              Please enter the Email*
            </span>
          ) : null}

          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              onChange={handleGenderInputChange}
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
              value={values.Gender}
            >
              <FormControlLabel
                value="female"
                control={<Radio color="default" size="small" />}
                label="Female"
              />

              <FormControlLabel
                value="male"
                control={<Radio color="default" size="small" />}
                label="Male"
              />
              <FormControlLabel
                value="others"
                control={<Radio color="default" size="small" />}
                label="Others"
              />
            </RadioGroup>
            {submitted && !valid && !values.Gender ? (
              <span
                style={{
                  color: "red",
                  fontSize: "12px",
                  position: "relative",
                  top: "-10px",
                }}
              >
                Select the gender
              </span>
            ) : null}
          </FormControl>
          <TextField
            fullWidth
            onChange={handlePhoneNumberInputChange}
            label="Phone Number"
            value={values.PhoneNumber}
            variant="outlined"
            style={{ margin: "8px  0px 8px 0px" }}
          />
          {submitted && !valid && !values.PhoneNumber ? (
            <span
              style={{
                color: "red",
                fontSize: "12px",
                position: "relative",
                top: "-10px",
              }}
            >
              Please enter a PhoneNumber
            </span>
          ) : null}

          {phoneValidate && values.PhoneNumber ? (
            <span style={{ color: "red" }}>
              Please enter a valid Phone Number
            </span>
          ) : null}

          <TextField
            fullWidth
            onChange={handlePasswordInputChange}
            label="Password"
            type="password"
            value={values.Password}
            variant="outlined"
            style={{ margin: "8px  0px 8px 0px" }}
          />

          {submitted && !valid && !values.Password ? (
            <span
              style={{
                color: "red",
                fontSize: "12px",
                position: "relative",
                top: "-10px",
              }}
            >
              Please enter the Password
            </span>
          ) : null}

          {visibilityHandler ? (
            <label style={{ color: "red" }}> Password is not matched.</label>
          ) : null}

          <div className="pass-wrapper">
            <TextField
              fullWidth
              onChange={handleConfirmPasswordInputChange}
              label="Confirm Password"
              type={passwordShown ? "text" : "Password"}
              value={values.ConfirmPassword}
              variant="outlined"
              style={{ margin: "7px  0px 7px 0px" }}
            />
            {passwordShown ? (
              <i onClick={togglePasswordVisiblity}>{closeeye}</i>
            ) : (
              <i onClick={togglePasswordVisiblity}>{eye}</i>
            )}
          </div>

          {submitted && !valid && !values.ConfirmPassword ? (
            <span
              style={{
                color: "red",
                fontSize: "12px",
                position: "relative",
                top: "-25px",
              }}
            >
              Please enter the Password
            </span>
          ) : null}

          <Button
            type="submit"
            variant="contained"
            style={btnstyle}
            onClick={handleSubmit}
            startIcon={<SaveIcon />}
            fullWidth
          >
            Sign up
          </Button>
          <Button
            className="btnclose"
            variant="contained"
            style={btnstyle}
            onClick={props.onClick}
            fullWidth
          >
            Finish Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
