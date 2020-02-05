import { createActions, handleActions } from "redux-actions";
import {
  education,
  experience,
  languages,
  name,
  email,
  phone,
  skills,
  github,
  linkedin
} from "../../utils/index";

const formActionTypes = {
  UPDATE: "UPDATE"
};

const { update } = createActions(formActionTypes.UPDATE);

const initialState = {
  // language: 1,
  name: name,
  email: email,
  phone: phone,
  education: education,
  experience: experience,
  languages: languages,
  skills: skills,
  github: github,
  linkedin: linkedin
};

const formReducer = handleActions(
  {
    [formActionTypes.UPDATE]: (state, action) => {
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    }
  },
  initialState
);

export { formReducer, update };
