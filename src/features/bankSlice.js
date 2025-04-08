import {createSlice} from "@reduxjs/toolkit";

const bankSlice = createSlice({
    name: "bank",
    initialState: {
        balance: 0,
    },
    reducers: {
        deposit: (state, action) => {
            return {...state, balance: state.balance + action.payload};
        },
        withdraw: (state, action) => {
            return {...state, balance: state.balance < action.payload ? state.balance : state.balance - action.payload};
        }
    }
})

export default bankSlice.reducer
export const {deposit, withdraw} = bankSlice.actions