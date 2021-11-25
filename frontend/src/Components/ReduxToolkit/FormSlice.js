import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

let initialState = [
  {
    id: uuidv4(),
    inputType: "singleInput",
    question: "",
    isQuestionValid: false,
    errorText: "Please enter your question!",
    isRequired: false,
    options: [],
  },
];

const FormReducer = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    addSection(state) {
      state.push({
        id: uuidv4(),
        inputType: "singleInput",
        question: "",
        isRequired: false,
        options: [],
      });
    },
    changeType(state, action) {
      let { id, questionType } = action.payload;
      let currentValue = state.find((data) => data.id === id);
      currentValue.inputType = questionType;
      currentValue.isQuestionValid = false;

      if (
        currentValue.inputType === "checkBox" ||
        currentValue.inputType === "singleCorrect" ||
        currentValue.inputType === "dropdown"
      ) {
        currentValue.options = [""];
      } else {
        currentValue.options = [];
      }
      currentValue.isRequired = false;

      //   let existingValueChangeType = state.find(
      //     (data) => data.id === action.payLoad.id
      //   );
      //   if (
      //     existingValueChangeType.inputType === "checkBox" ||
      //     existingValueChangeType.inputType === "singleCorrect"
      //   ) {
      //     existingValueChangeType.options.push("");
      //   }
      //   if (existingValueChangeType) {
      //     existingValueChangeType.inputType = action.payLoad.questionType;
      //   }
    },
    addOption(state, action) {
      let id = action.payload.id;
      let currentValue = state.find((data) => data.id === id);
      currentValue.options.push("");
    },
    deleteOption(state, action) {
      let { id, index } = action.payload;
      let currentValue = state.find((data) => data.id === id);
      console.log(currentValue.options);
      currentValue.options.splice(index, 1);
    },
    updateOptionText(state, action) {
      let { id, index, text } = action.payload;
      let currentValue = state.find((data) => data.id === id);
      currentValue.options[index] = text;
    },
    addQuestion(state, action) {
      let { id, question } = action.payload;
      let currentValue = state.find((data) => data.id === id);
      currentValue.question = question;
      const validity = currentValue.question.match(/[a-zA-z0-9]/g);
      if (validity) {
        currentValue.isQuestionValid = true;
      } else {
        currentValue.isQuestionValid = false;
      }
    },
    changeRequiredButton(state, action) {
      let { id } = action.payload;
      let currentValue = state.find((data) => data.id === id);
      currentValue.isRequired = !currentValue.isRequired;
    },
    validateQuestion(state, action) {
      let { id } = action.payload;
      let currentValue = state.find((data) => data.id === id);
      currentValue.question.match("[a-zA-z0-9]/g");
    },
  },
});

export const FormActions = FormReducer.actions;
export default FormReducer;
