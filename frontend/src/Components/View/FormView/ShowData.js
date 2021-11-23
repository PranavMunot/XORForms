import React from "react";
import {
  Checkbox,
  TextField,
  FormControlLabel,
  FormGroup,
  Radio,
  FormControl,
  RadioGroup,
  Button,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { FormDataActions } from "../../ReduxToolkit/FormDataSlice";

function ShowData({ data }) {
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
            {console.log(type.options)}
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
              {/* TODO : HANDLECHANGE TO IMPLIMENT HERE */}
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
