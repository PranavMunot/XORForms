import React, { useState } from "react";
import { Card, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import SingleLineInput from "../FormTypes/SingleLineInput";
import { useDispatch, useSelector } from "react-redux";
import { FormActions } from "../ReduxToolkit/FormSlice";

function Input({ object }) {
  // redux Functions
  const state = useSelector((state) =>
    state.form.find((item) => item.id === object.id)
  );
  const dispatch = useDispatch();
  const [Type, setType] = useState(state.inputType);

  let handleChange = (e) => {
    const changedType = e.target.value;

    dispatch(
      FormActions.changeType({ id: object.id, questionType: changedType })
    );
    setType(changedType);
  };

  return (
    <Card sx={{ marginY: 2, padding: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Input Type</InputLabel>
        <Select
          id="demo-simple-select"
          value={Type}
          label="Select Input Type"
          onChange={handleChange}
        >
          <MenuItem value={"singleInput"}>Single Input</MenuItem>
          <MenuItem value={"multipleInput"}>Multiple Input</MenuItem>
          <MenuItem value={"checkBox"}> Check Box</MenuItem>
          <MenuItem value={"singleCorrect"}> Single Correct Option</MenuItem>
          <MenuItem value={"fileUpload"}> File Upload</MenuItem>
          <MenuItem value={"datePicker"}>Date Picker</MenuItem>
        </Select>
      </FormControl>
      <SingleLineInput
        id={object.id}
        questionType={object.inputType}
        question={object.question}
      />
    </Card>
  );
}

export default Input;
