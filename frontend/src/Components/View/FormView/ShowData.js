import React from "react";
import {
  Checkbox,
  TextField,
  FormControlLabel,
  FormGroup,
  Radio,
  FormControl,
  RadioGroup,
  InputLabel,
  Select,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { FormDataActions } from "../../ReduxToolkit/FormDataSlice";

function ShowData({ data }) {
  // const state = useSelector(state => state.formdata.)
  const dispatch = useDispatch();

  const renderInputType = (type, submitCheck) => {
    switch (type.inputType) {
      case "singleInput":
        return (
          <TextField
            fullWidth
            sx={{ paddingBottom: 2 }}
            required={type.isRequired}
            onBlur={(e) => {
              dispatch(
                FormDataActions.addUpdateSingleData({
                  id: type.id,
                  fieldName: type.question,
                  data: e.target.value,
                })
              );
            }}
            placeholder="Your Response"
            required={type.isRequired}
            variant="standard"
          />
        );

      case "multipleInput":
        return (
          <TextField
            fullWidth
            multiline
            required={type.isRequired}
            rows={4}
            onBlur={(e) => {
              dispatch(
                FormDataActions.addUpdateSingleData({
                  id: type.id,
                  fieldName: type.question,
                  data: e.target.value,
                })
              );
            }}
            placeholder="Your Response"
            sx={{ padding: 2 }}
            required={type.isRequired}
            variant="standard"
          />
        );
      case "checkBox":
        return (
          <>
            {type.options.map((data, index) => {
              return (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(e) => {
                          if (e.target.checked) {
                            dispatch(
                              FormDataActions.addCheckBoxData({
                                id: type.id,
                                fieldName: type.question,
                                index,
                                data,
                              })
                            );
                          } else {
                            dispatch(
                              FormDataActions.removeCheckBoxData({
                                id: type.id,
                                index,
                              })
                            );
                          }
                        }}
                      />
                    }
                    label={data}
                  />
                </FormGroup>
              );
            })}
          </>
        );
      case "singleCorrect":
        return (
          <>
            <FormControl component="fieldset">
              <RadioGroup aria-label="gender" name="radio-buttons-group">
                {type.options.map((data, index) => {
                  return (
                    <FormControlLabel
                      value={data}
                      control={
                        <Radio
                          onChange={(e) => {
                            dispatch(
                              FormDataActions.addUpdateRadioData({
                                id: type.id,
                                fieldName: type.question,
                                data,
                              })
                            );
                          }}
                        />
                      }
                      label={data}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </>
        );
      case "fileUpload":
        return (
          <>
            <Button
              variant="contained"
              sx={{ marginBottom: 2 }}
              component="label"
            >
              Upload File
              <input type="file" hidden />
            </Button>
          </>
        );
      case "datePicker":
        return (
          <>
            <TextField
              type="date"
              sx={{ marginBottom: 2 }}
              onChange={(e) => {
                dispatch(
                  FormDataActions.addUpdateDate({
                    id: type.id,
                    fieldName: type.question,
                    data: e.target.value,
                  })
                );
              }}
            />
          </>
        );

      case "dropdown":
        return (
          <>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <InputLabel id="dropdown_lable">Select Option</InputLabel>
              <Select id="dropdown_lable" label="Select Option">
                {type.options.map((data, index) => {
                  return (
                    <MenuItem
                      key={index}
                      onClick={(e) => {
                        dispatch(
                          FormDataActions.addUpdateRadioData({
                            id: type.id,
                            fieldName: type.question,
                            data,
                          })
                        );
                      }}
                      value={data}
                    >
                      {data}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </>
        );

      default:
        return null;
    }
  };

  const submitCheck = (data, id) => {
    console.log(data, id);
  };

  return (
    <div>
      <Typography variant="subtitle1">
        {data.question.length > 0 ? data.question : "Question"}
      </Typography>
      <br />
      {renderInputType(data, submitCheck)}
    </div>
  );
}

export default ShowData;
