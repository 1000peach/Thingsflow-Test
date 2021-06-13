import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import IssueAPI from "../../api/issueAPI";

const [INIT, LOADING, SUCCESS, ERROR] = ["init", "loading", "success", "error"];

const prefix = "issue";

export const getIssueList = createAsyncThunk(`${prefix}/getIssueList`, async () => {
  const resData = await IssueAPI.getIssueList({
    owner: "angular",
    repo: "angular-cli"
  });
  return resData;
});

const initialState = {
  issues: {
    status: INIT,
    data: []
  }
};

const issue = createSlice({
  name: prefix,
  initialState: initialState,

  reducers: {},

  extraReducers: {
    [getIssueList.pending]: (state, action) => {
      state.issues.status = LOADING;
    },
    [getIssueList.fulfilled]: (state, action) => {
      state.issues.status = SUCCESS;
      state.issues.data = action.payload;
    },
    [getIssueList.rejected]: (state, action) => {
      state.issues.status = ERROR;
    }
  }
});

export default issue;
