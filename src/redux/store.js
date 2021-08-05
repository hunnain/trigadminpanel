import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage, loading: false },
};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middlewares))
  // composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
