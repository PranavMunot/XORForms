import React, { useState, useEffect } from "react";
import { Container, Card, TextField, Button } from "@mui/material";
import "./Form.css";
import Input from "../Inputs/Input";
// import { users } from "../../Database/database";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FormActions } from "../ReduxToolkit/FormSlice";
import { TitleActions } from "../ReduxToolkit/TiltleSlice";
import { FormDataActions } from "../ReduxToolkit/FormDataSlice";

function Form() {
  const FormArray = useSelector((state) => state.form);
  const Title = useSelector((state) => state.title);
  const dispatch = useDispatch();

  const [titleState, setTitleState] = useState({
    titleHead: "",
    titleDesc: "",
  });

  useEffect(() => {
    setTitleState({
      ...titleState,
      titleHead: Title.formTitle,
      titleDesc: Title.formDescription,
    });
  }, [Title]);

  const handeleTitleChange = (e) => {
    if (e.target.name === "titleHead") {
      setTitleState({ ...titleState, titleHead: e.target.value });
    } else {
      setTitleState({ ...titleState, titleDesc: e.target.value });
    }
  };

  const updateResponseState = () => {
    console.log("erase all state");
    dispatch(FormDataActions.removeAllData());
  };

  const handleTitleHeadAction = () => {
    dispatch(TitleActions.addTitle({ title: titleState.titleHead }));
  };
  const handleTitleDescAction = () => {
    dispatch(TitleActions.addDescription({ title: titleState.titleDesc }));
  };

  let addInput = () => {
    dispatch(FormActions.addSection());
  };

  return (
    <Container>
      <Card sx={{ marginTop: 2 }}>
        <TextField
          fullWidth
          className={{ fontsize: "50px" }}
          id="standard-basic"
          placeholder="Form Title"
          name="titleHead"
          value={titleState.titleHead}
          onBlur={handleTitleHeadAction}
          variant="standard"
          onChange={handeleTitleChange}
          InputProps={{
            style: { fontSize: 28 },
          }}
          sx={{ paddingX: 2, paddingTop: 2 }}
        />
        <TextField
          fullWidth
          name="titleDesc"
          value={titleState.titleDesc}
          onBlur={handleTitleDescAction}
          variant="standard"
          placeholder="Form Description"
          onChange={handeleTitleChange}
          sx={{ marginTop: 2, paddingX: 2, paddingBottom: 2 }}
        />
      </Card>
      {FormArray &&
        FormArray.map((user) => {
          return <Input key={user.id} object={user} />;
        })}

      <Button
        sx={{ marginBottom: 2, fontWeight: 700, marginRight: 2 }}
        variant="contained"
        onClick={addInput}
      >
        Add Item
      </Button>
      <Link className="link" to="/preview">
        <Button
          sx={{ fontWeight: 700, marginBottom: 2 }}
          onClick={updateResponseState}
          variant="contained"
        >
          Preview
        </Button>
      </Link>
    </Container>
  );
}

export default Form;
