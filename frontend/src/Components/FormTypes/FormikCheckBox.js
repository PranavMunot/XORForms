import React from "react";
import {
  FormControl,
  Checkbox,
  Button,
  FormControlLabel,
  Switch,
  IconButton,
} from "@mui/material";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import OptionText from "./OptionText";
import QuestionText from "./QuestionText";
import { FormActions } from "../ReduxToolkit/FormSlice";

const FormikCheckBox = ({ id }) => {
  const state = useSelector((state) =>
    state.form.find((item) => item.id === id)
  );
  const dispatch = useDispatch();

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
      {state.options &&
        state.options.map((data, index) => {
          return (
            <FormControl fullWidth key={index} sx={{ flexDirection: "row" }}>
              <Checkbox disabled />
              <OptionText id={id} data={data} index={index} />
              <IconButton
                sx={{ color: "error.light" }}
                onClick={() => {
                  dispatch(FormActions.deleteOption({ id: id, index: index }));
                }}
              >
                <TiDelete />
              </IconButton>
            </FormControl>
          );
        })}

      <Button
        onClick={() => {
          dispatch(FormActions.addOption({ id: id }));
        }}
        variant="text"
      >
        Add More
      </Button>

      {/* 
      <Formik
        enableReinitialize={true}
        initialValues={{ checkBoxValue: state.option }}
      >
        {({ values, handleChange }) => (
          <Form>
            <FieldArray name={"checkBoxValue"}>
              {({ push, remove }) => (
                <div>
                  {values.checkBoxValue &&
                    values.checkBoxValue.map((val, index) => (
                      <FormControl
                        fullWidth
                        key={index}
                        sx={{ flexDirection: "row" }}
                      >
                        <Checkbox disabled />
                        <TextField
                          variant="standard"
                          name={`checkBoxValue[${index}]`}
                          value={val}
                          onBlur={() => {
                            submitOption(index, val);
                          }}
                          onChange={handleChange}
                        />
                        <IconButton
                          color="error"
                          onClick={() => {
                            remove(index);
                            dispatch({
                              type: DELETE_OPTION,
                              payLoad: { id: id, index: index },
                            });
                          }}
                        >
                          <AiFillDelete />
                        </IconButton>
                      </FormControl>
                    ))}
                  <>
                    <Button
                      onClick={() => {
                        push("");
                        dispatch({ type: ADD_OPTIONS, id: id });
                      }}
                      variant="text"
                    >
                      Add More
                    </Button>
                  </>
                </div>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik> */}
    </div>
  );
};

export default FormikCheckBox;
