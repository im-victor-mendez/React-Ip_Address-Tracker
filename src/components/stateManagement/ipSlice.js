import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ip: '',
    /*
    data: {
        "ip": "",
        "location": {
            "country": "",
            "region": "",
            "city": "",
            "lat": ,
            "lng": ,
            "postalCode": "",
            "timezone": "",
            "geonameId": 
        },
        "domains": ["", ""],
        "as": {
            "asn": ,
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
            },
            setCurrentPosition: (state, action) => {
                const data = action.payload
                console.log(data)
                return {
                    ...state,
                    data
                }
            }
        }
    }
)

export const { setIp, setIpData, setCurrentPosition } = ipSlice.actions

export default ipSlice