import React, { useState } from "react";
import {
  Card,
  FormControl,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  InputLabel,
  Divider,
} from "@mui/material";
import SingleLineInput from "../FormTypes/SingleLineInput";
import { useDispatch, useSelector } from "react-redux";
import { FormActions } from "../ReduxToolkit/FormSlice";
import QuestionText from "../FormTypes/QuestionText";

function Input({ object }) {
  // redux Functions
  const state = useSelector((state) =>
    state.form.find((item) => item.id === object.id)
  );
  const dispatch = useDispatch();
  const [Type, setType] = useState(state.inputType);
  const [Modal, setModal] = useState(false);
  const [changes, setChanges] = useState("");

  let handleChange = (e) => {
    setChanges(e.target.value);
    setModal(true);
  };
  let handleClose = () => {
    setModal(false);
  };

  const acceptChanges = () => {
    setType(changes);
    dispatch(FormActions.changeType({ id: object.id, questionType: changes }));
    setChanges("");
    setModal(false);
  };
  const rejectChanges = () => {
    setChanges("");
    setModal(false);
  };

  return (
    <Card sx={{ marginY: 2, padding: 2 }}>
      <QuestionText id={object.id} questionText={state.question} />
      <FormControl sx={{ marginTop: 2 }} fullWidth>
        <InputLabel id="demo-simple-select-label">Select Input Type</InputLabel>
        <Select
          id="demo-simple-select"
          value={Type}
          label="Select Input Type"
          onChange={handleChange}
        >
          <MenuItem value={"singleInput"}>Short Answer</MenuItem>
          <MenuItem value={"multipleInput"}>Paragraph</MenuItem>
          <Divider />
          <MenuItem value={"dropdown"}>Dropdown List</MenuItem>
          <MenuItem value={"checkBox"}> Check Box</MenuItem>
          <MenuItem value={"singleCorrect"}>Radio</MenuItem>
          <Divider />
          <MenuItem value={"fileUpload"}> File Upload</MenuItem>
          <MenuItem value={"datePicker"}>Date Picker</MenuItem>
        </Select>
      </FormControl>
      <SingleLineInput
        id={object.id}
        questionType={object.inputType}
        question={object.question}
      />
      <Dialog
        open={Modal}
        onClose={handleClose}
        PaperProps={{
          style: { border: "2px solid rgba(18, 145, 111,1)" },
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Warning"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to change input type? You will lose you data.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={rejectChanges}>Disagree</Button>
          <Button onClick={acceptChanges}>Agree</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default Input;
