import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./features/themSlice/themeSlice"

 export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

