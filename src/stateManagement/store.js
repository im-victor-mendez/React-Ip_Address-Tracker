import { configureStore } from "@reduxjs/toolkit";
import ipSlice from "./ipSlice";

const store = configureStore(
    {
        reducer: {
            ip: ipSlice.reducer
        }
    }
)

export default store