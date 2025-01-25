import { configureStore } from '@reduxjs/toolkit'
import darkmode from './Features/darkmode/Dark.jsx'

export const store = configureStore({
  reducer: {
    dark:darkmode
  },
});
