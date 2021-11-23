import { FormControlLabel, Switch, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormActions } from "../ReduxToolkit/FormSlice";
import QuestionText from "./QuestionText";

function FileUpload({ id }) {
  const state = useSelector((state) =>
    state.form.find((item) => item.id === id)
  );

  const dispatch = useDispatch();
  let handleChange = (e) => {
    console.log(e.target.files[0].name);
  };
  let handleSwitch = () => {
    dispatch(FormActions.changeRequiredButton({ id: id }));
  };
  return (
    <div>
      <QuestionText id={id} questionText={state.question} />
      <FormControlLabel
        control={<Switch checked={state.isRequired} onChange={handleSwitch} />}
        label="Required"
      />
      <br />
      <Button disabled variant="contained" component="label">
        Upload File
        <input type="file" hidden onChange={handleChange} />
      </Button>
    </div>
  );
}

export default FileUpload;
