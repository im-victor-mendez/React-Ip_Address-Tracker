import '../../style/components/layout/IpData.css'
import React from 'react'
import Board from '../common/Board'
import { useSelector } from "react-redux";
import Data from '../common/Data';

function IpData() {
    const ipData = useSelector(state => state.ip.data ? state.ip.data : {})

    const ip = ipData.ip
    const location = ipData.location ? ipData.location : {}
    const aS = ipData.as
    const isp = ipData.isp
    
    const view = [
        ip ?
        <Data
        title={'Ip Address'}
        value={ip ? ip : ''} /> : null,

        location && aS ?
        <Data
        title={'Location'}
        value={`${location.region}, ${location.country}\n${aS.asn}`} /> : null,

        location.timezone ?
        <Data
        title={'Timezone'}
        value={`UTC ${location.timezone}`} /> : null,

        isp ? <Data title={'ISP'} value={isp} /> : null
    ]

    return <Board id='ip-data' view={view} />
}

export default IpData