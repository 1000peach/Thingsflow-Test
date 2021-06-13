import { combineReducers } from "redux";
import issue from "./issueReducer";

export const rootReducer = combineReducers({
  issue: issue.reducer
});
