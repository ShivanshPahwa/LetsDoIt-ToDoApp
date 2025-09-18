import { configureStore } from "@reduxjs/toolkit";
import labelSlice from './labelSlice';

const appStore  = configureStore({
    reducer: {
        labelData: labelSlice
    }
})

export default appStore;