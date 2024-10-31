import { configureStore } from '@reduxjs/toolkit'
import StudentsSlice from './StudentsSlice'

export const store = configureStore({
  reducer: {
    students: StudentsSlice
  },
})

