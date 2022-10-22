import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const ipSlice = createSlice(
    {
        name: 'ipSlice',
        initialState,
        reducers: {
            setIp: (state, action) => {
                const ip = action.payload
                return {...state, ip: ip}
            }
        }
    }
)

export const { setIp } = ipSlice.actions

export default ipSlice