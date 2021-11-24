import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControl,
  Radio,
  Button,
  IconButton,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { TiDelete } from "react-icons/ti";
import OptionText from "./OptionText";
import QuestionText from "./QuestionText";
import { FormActions } from "../ReduxToolkit/FormSlice";

const SingleCorrect = ({ id }) => {
  const state = useSelector((state) =>
    state.form.find((item) => item.id === id)
  );
  const dispatch = useDispatch();

  let handleSwitch = () => {
    dispatch(FormActions.changeRequiredButton({ id: id }));
  };

  return (
    <div>
      <FormControlLabel
        control={<Switch checked={state.isRequired} onChange={handleSwitch} />}
        label="Required"
      />

      {state.options &&
        state.options.map((data, index) => {
          return (
            <FormControl fullWidth key={index} sx={{ flexDirection: "row" }}>
              <Radio disabled />
              <OptionText id={id} data={data} index={index} />
              <IconButton
                color="error"
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

      {/* <Formik initialValues={{ singleCorrect: [""] }}>
        {({ values, handleChange }) => (
          <Form>
            <FieldArray name={"singleCorrect"}>
              {({ push, remove }) => (
                <div>
                  {values.singleCorrect &&
                    values.singleCorrect.map((val, index) => (
                      <FormControl
                        fullWidth
                        key={index}
                        sx={{ flexDirection: "row" }}
                      >
                        <RadioGroup name="row-radio-buttons-group">
                          <FormControlLabel
                            value={val}
                            control={<Radio />}
                            disabled
                            label={
                              <TextField
                                variant="standard"
                                name={`singleCorrect[${index}]`}
                                value={val}
                                onChange={handleChange}
                              />
                            }
                          ></FormControlLabel>
                        </RadioGroup>
                        <IconButton color="error" onClick={() => remove(index)}>
                          <AiFillDelete />
                        </IconButton>
                      </FormControl>
                    ))}
                  <>
                    <Button
                      onClick={() => {
                        push("");
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

export default SingleCorrect;
