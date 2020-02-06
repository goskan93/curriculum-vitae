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
  linkedin,
  website,
  other
} from "../../utils/index";

const formActionTypes = {
  UPDATE_PERSONAL_INFO: "UPDATE_PERSONAL_INFO",
  UPDATE_SECTION: "UPDATE_SECTION",
  ADD_ELEM_SECTION: "ADD_ELEM_SECTION"
};

const { updatePersonalInfo, updateSection, addElemSection } = createActions(
  formActionTypes.UPDATE_PERSONAL_INFO, 
  formActionTypes.UPDATE_SECTION,
  formActionTypes.ADD_ELEM_SECTION
  );

const initialState = {
  // language: 1,
  name: name,
  email: email,
  phone: phone,
  website: website,
  linkedin: linkedin,
  github: github,
  education: education,
  experience: experience,
  languages: languages,
  skills: skills,
  other: other
};

const formReducer = handleActions(
  {
    [formActionTypes.UPDATE_PERSONAL_INFO]: (state, action) => {
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    },
    [formActionTypes.UPDATE_SECTION]: (state, action) => {
      const { field, value, index, element } = action.payload;
      const getSection = state[field]
      const getElementSection = getSection[index]
      const updateElementSection = {...getElementSection, [element]: value}
      getSection[index] = updateElementSection
      return { ...state, [field]: getSection };
    },
    [formActionTypes.ADD_ELEM_SECTION]: (state, action) => {
      const { field } = action.payload;
      const getSection = state[field]
      const updateSection = [...getSection, {primaryText:"", secondaryText: ""}]
      return { ...state, [field]: updateSection };
    }
  },
  initialState
);

export { formReducer, updatePersonalInfo, updateSection, addElemSection };
