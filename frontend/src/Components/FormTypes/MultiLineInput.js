import React from "react";
import { FormGroup, TextField, FormControlLabel, Switch } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { FormActions } from "../ReduxToolkit/FormSlice";
import QuestionText from "./QuestionText";

function MultiLineInput({ id }) {
  const state = useSelector((state) =>
    state.form.find((item) => item.id === id)
  );
  const dispatch = useDispatch();

  let handleSwitch = () => {
    dispatch(FormActions.changeRequiredButton({ id: id }));
  };

  return (
    <div>
      <FormGroup>
        <QuestionText id={id} questionText={state.question} />
        <FormControlLabel
          control={
            <Switch checked={state.isRequired} onChange={handleSwitch} />
          }
          label="Required"
        />
      </FormGroup>
      <TextField
        variant="filled"
        value={"Your User's Response will be noted here"}
        disabled
        fullWidth
        multiline
        rows={5}
        sx={{ marginTop: 2 }}
      />
    </div>
  );
}

export default MultiLineInput;
