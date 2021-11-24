import { FormGroup, TextField, FormControlLabel, Switch } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormActions } from "../ReduxToolkit/FormSlice";
// FIles Import
import SingleCorrect from "./SingleCorrect";
import FormikCheckBox from "./FormikCheckBox";
import MultiLineInput from "./MultiLineInput";
import DatePicker from "./DatePicker";
import FileUpload from "./FileUpload";
import Dropdown from "./Dropdown";

function SingleLineInput(props) {
  const state = useSelector((state) =>
    state.form.find((item) => item.id === props.id)
  );
  const dispatch = useDispatch();

  let handleSwitch = () => {
    dispatch(FormActions.changeRequiredButton({ id: props.id }));
  };

  if (props.questionType === "singleInput") {
    return (
      <>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={state.isRequired} onClick={handleSwitch} />
            }
            label="Required"
          />
        </FormGroup>
        <TextField
          variant="filled"
          value={"Your User's Response will be noted here"}
          disabled
          fullWidth
          sx={{ marginY: 2 }}
        />
      </>
    );
  } else if (props.questionType === "multipleInput") {
    return <MultiLineInput id={props.id} />;
  } else if (props.questionType === "checkBox") {
    return <FormikCheckBox id={props.id} />;
  } else if (props.questionType === "singleCorrect") {
    return <SingleCorrect id={props.id} />;
  } else if (props.questionType === "datePicker") {
    return <DatePicker id={props.id} />;
  } else if (props.questionType === "fileUpload") {
    return <FileUpload id={props.id} />;
  } else if (props.questionType === "dropdown") {
    return <Dropdown id={props.id} />;
  }
}

export default SingleLineInput;
