import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ip: '',
    /*
    data: {
        "ip": "",
        "location": {
            "country": "",
            "region": "",
            "timezone": ""
        },
        "domains": [],
        "as": {
            "asn": 0,
            "name": "",
            "route": "",
            "domain": "",
            "type": ""
        },
        "isp": ""
    }
    */
}

const ipSlice = createSlice(
    {
        name: 'ipSlice',
        initialState,
        reducers: {
            setIp: (state, action) => {
                const ip = action.payload
                return {...state, ip}
            },
            setIpData: (state, action) => {
                const data = action.payload
                return {...state, data}
            }
        }
    }
)

export const { setIp, setIpData } = ipSlice.actions

export default ipSlice