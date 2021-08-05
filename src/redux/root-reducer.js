import { combineReducers } from "redux";
import ProductReducer from "./Products/reducer";
import PresetProductReducer from "./PresetProduct/reducer";

export default combineReducers({
  ProductReducer,
  PresetProductReducer
});
