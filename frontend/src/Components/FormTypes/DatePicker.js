import React, { useState } from "react";
import { TextField, FormControlLabel, Switch } from "@mui/material";
import { FormActions } from "../ReduxToolkit/FormSlice";
import { useDispatch, useSelector } from "react-redux";
import QuestionText from "./QuestionText";

function DatePicker({ id }) {
  const [date, setDate] = useState();

  const dispatch = useDispatch();

  const state = useSelector((state) =>
    state.form.find((item) => item.id === id)
  );

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  let handleSwitch = () => {
    dispatch(FormActions.changeRequiredButton({ id: id }));
  };

  return (
    <div>
      <FormControlLabel
        sx={{ marginTop: 2 }}
        control={<Switch checked={state.isRequired} onChange={handleSwitch} />}
        label="Required"
      />
      <br />
      <TextField
        type="date"
        value={date}
        sx={{ marginTop: 2 }}
        disabled
        onChange={handleChange}
      />
    </div>
  );
}

export default DatePicker;
