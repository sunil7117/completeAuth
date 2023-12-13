import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import loginReducer  from "./loginSlice";

const rootReducer=combineReducers({
    login:loginReducer,
    data:dataReducer,
})
export const store=configureStore({
    reducer:rootReducer
})