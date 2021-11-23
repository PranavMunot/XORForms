import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FormActions } from "../ReduxToolkit/FormSlice";
import { TextField } from "@mui/material";

function OptionText({ id, data, index }) {
  let [optionValue, setOptionValue] = useState("");

  useEffect(() => {
    setOptionValue(data);
  }, [data]);

  const dispatch = useDispatch();
  let handleChange = (e) => {
    setOptionValue(e.target.value);
  };
  let submitOption = (index, text) => {
    dispatch(
      FormActions.updateOptionText({ id: id, index: index, text: text })
    );
  };

  return (
    <>
      <TextField
        variant="standard"
        value={optionValue}
        onBlur={() => {
          submitOption(index, optionValue);
        }}
        onChange={handleChange}
      />
    </>
  );
}

export default OptionText;
