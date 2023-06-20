import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import themeReducer from "../common/themeSlice";
import personalHomepageReducer from "../features/personalHomepage/personalHomepageSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
    personalHomepage: personalHomepageReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
