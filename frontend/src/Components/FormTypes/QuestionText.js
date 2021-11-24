import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { FormActions } from "../ReduxToolkit/FormSlice";
import { useDispatch, useSelector } from "react-redux";

function QuestionText({ id, questionText }) {
  const state = useSelector((state) =>
    state.form.find((item) => item.id === id)
  );

  const [value, setValue] = useState(questionText);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setValue(questionText);
  }, [questionText]);

  const dispatch = useDispatch();

  let handleInputChange = (e) => {
    let text = e.target.value;
    if (text.match(/[a-zA-Z0-9]/g)) {
      setError(false);
    } else {
      setError(true);
    }
    setValue(text);
  };

  let questionHandler = () => {
    dispatch(FormActions.addQuestion({ id: id, question: value }));
  };

  let focusHandler = (e) => {
    let text = e.target.value;
    if (text.match(/[a-zA-Z0-9]/g)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <TextField
        fullWidth
        value={value}
        error={isError}
        placeholder="Type Your Question Here"
        onBlur={questionHandler}
        onChange={handleInputChange}
        onFocus={focusHandler}
        variant="filled"
        // sx={{ marginTop: 2 }}
        helperText={isError ? state.errorText : null}
      />
    </>
  );
}

export default QuestionText;
