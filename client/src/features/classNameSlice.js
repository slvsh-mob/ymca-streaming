import { createSlice } from '@reduxjs/toolkit'

const initialState = 'YMCA Class'

const classNameSlice = createSlice({
    name: 'className',
    initialState,
    reducers: {

    }
})

export default classNameSlice.reducer