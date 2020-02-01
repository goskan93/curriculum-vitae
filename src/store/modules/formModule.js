import { createActions, handleActions } from "redux-actions";

const formActionTypes = {
  UPDATE: "UPDATE"
};

const { update } = createActions(formActionTypes.UPDATE);

const initialState = {
  language: 1
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
