import { configureStore } from "@reduxjs/toolkit";
import stationsReducer from "./slice/stationsSlice";

const store = configureStore({
    reducer: {
        stations: stationsReducer
    }
})

export default store

