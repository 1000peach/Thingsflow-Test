import { createSlice } from "@reduxjs/toolkit";

const prefix = "issue";

const initialState = {
  issues: {
    data: []
  }
};

const issue = createSlice({
  name: prefix,
  initialState: initialState,

  reducers: {}
});

export default issue;
