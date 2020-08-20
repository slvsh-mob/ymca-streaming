import { createSlice } from '@reduxjs/toolkit'

const initialState = 'John Doe'

const instructorSlice = createSlice({
    name: 'instructor',
    initialState,
    reducers: {

    }
})

export default instructorSlice.reducer