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
import { FormActions } from "../ReduxToolkit/FormSlice";

function Dropdown({ id }) {
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
    </div>
  );
}

export default Dropdown;
