import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import numberReducer from "../features/number/numberSlice";
import userReducer from "../features/users/userSlice";
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        number : numberReducer,
        users : userReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
})

export default store