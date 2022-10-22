import React from 'react'
import Board from '../common/Board'
import { useSelector } from "react-redux";
import Data from '../common/Data';

function IpData() {
    const ipData = useSelector(state => state.ip.data ? state.ip.data : {})

    const ip = ipData.ip
    const location = ipData.location
    const aS = ipData.as
    const isp = ipData.isp

    console.log(ipData, ip, location, aS, isp)
    
    const view = [
        <Data
        title={'Ip Address'}
        value={ip ? ip : ''} />,

        <Data
        title={'Location'}
        value={location && aS ? `${location.region}, ${location.country} ${aS.asn}` : ''} />,

        <Data
        title={'Timezone'}
        value={location ? `UTC ${location.timezone}` : ''} />,

        <Data title={'ISP'} value={isp ? isp : ''} />
    ]

    return <Board view={view} />
}

/*
{
    "ip": "8.8.8.8",
    "location": {
        "country": "US",
        "region": "California",
        "timezone": "-07:00"
    },
    "domains": [
        "nady.ma",
        "nancybeautysalon.duckdns.org",
        "newcoldparts.ma",
        "newsofmorocco21.com",
        "newstreen.com"
    ],
    "as": {
        "asn": 15169,
        "name": "GOOGLE",
        "route": "8.8.8.0/24",
        "domain": "https://about.google/intl/en/",
        "type": "Content"
    },
    "isp": "Google LLC"
}
*/

export default IpData