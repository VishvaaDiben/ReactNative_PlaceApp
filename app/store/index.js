import { combineEpics, createEpicMiddleware } from "redux-observable";

import { configureStore } from "@reduxjs/toolkit";
import { logSearchEpic } from "./epics/searchEpics";
import searchReducer from "./reducers/searchReducer";

const rootEpic = combineEpics(logSearchEpic);
const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);

export default store;
