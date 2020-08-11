import { combineReducers } from "redux";
import reducer from "./reducer.js";
import reducerPuzzleFen from "./reducerPuzzleFen.js";

const RootReducer = combineReducers({
  reducer,
  reducerPuzzleFen,
});

export default RootReducer;
