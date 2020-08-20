import { configureStore } from '@reduxjs/toolkit'

import instructorReducer from './features/instructorSlice'
import classNameReducer from './features/classNameSlice'
import occupantReducer from './features/occupantSlice'

export default configureStore({
    reducer: {
        instructor: instructorReducer,
        className: classNameReducer,
        occupant: occupantReducer
    }
  })