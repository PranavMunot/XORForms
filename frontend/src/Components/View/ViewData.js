import {
  Button,
  Card,
  Container,
  Divider,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ResponseActions } from "../ReduxToolkit/ResponseSlice";
import { FormDataActions } from "../ReduxToolkit/FormDataSlice";
import ShowData from "./FormView/ShowData";

const ViewData = () => {
  const state = useSelector((state) => state.form);
  const Title = useSelector((state) => state.title);
  const FormData = useSelector((state) => state.formdata);
  const FormDataOption = useSelector((state) => state.formdata.data);
  const dispatch = useDispatch();

  const [Data, setData] = useState(state);
  const [dataValue, setDataValue] = useState(FormData);
  const [dataValueOption, setDataValueOption] = useState(FormDataOption);
  const [snackBar, setSnackBar] = useState(false);

  useEffect(() => {
    setData(state);
  }, [state]);

  useEffect(() => {
    setDataValue(FormData);
  }, [FormData]);

  const submitHandler = (e) => {
    e.preventDefault();
    setSnackBar(true);
    dispatch(ResponseActions.addData({ data: dataValue }));
    dispatch(FormDataActions.removeAllData());
  };

  const handleClose = () => {
    setSnackBar(false);
  };

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <Card sx={{ marginY: 2, padding: 2, boxSizing: "border-box" }}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            {Title.formTitle}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "center", paddingBottom: 2 }}
          >
            {Title.formDescription}
          </Typography>
          <Divider variant="fullWidth" />
          {Data.map((data) => (
            <>
              <ShowData data={data} />
              <Divider variant="fullWidth" />
            </>
          ))}

          <Button
            variant="contained"
            sx={{ marginTop: 2, marginRight: 2 }}
            type="submit"
          >
            Submit
          </Button>
          <Button variant="text" sx={{ marginTop: 2 }} type="reset">
            Reset
          </Button>
        </Card>
      </form>
      <Link className="link" to="/">
        <Button sx={{ marginBottom: 2 }} variant="contained">
          Back
        </Button>
      </Link>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackBar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Form Submitted Successful!
        </Alert>
      </Snackbar>
    </Container>
  );
};
export default ViewData;
