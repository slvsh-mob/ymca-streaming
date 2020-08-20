import { createSlice } from '@reduxjs/toolkit'

const occupantSlice = createSlice({
    name: 'occupant',
    initialState: {
        value: 1
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        }
    }
})
export const {increment, decrement} = occupantSlice.actions
export default occupantSlice.reducer