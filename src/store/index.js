import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { formReducer } from "./modules/formModule";

const reducers = combineReducers({
  form: formReducer
});

const enhancer = applyMiddleware(thunk);

const store = createStore(reducers, enhancer);

export { store };
