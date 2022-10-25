import '../../style/components/layout/IpInput.css'
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { geolocationApiCountryIp, geolocationApiCountryDomain } from '../../utils/geolocationApi';
import { setIp, setIpData } from '../stateManagement/ipSlice';

function IpInput() {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()
    
    const ipRegex = /^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/

    function handleSubmit(event) {
        event.preventDefault()
        
        if(!input.match(ipRegex) && !input.match(domainRegex)) {
            window.alert('Please define an correct IP Address or domain, example:\nIP: 8.8.8.8\nDomain: google.com')
            return
        }

        dispatch(
            setIp(input)
        )

        if(input.match(ipRegex) != null) {
            geolocationApiCountryIp(input)
            .then(
                data => {
                    dispatch(
                        setIpData(data)
                    )
                }
            )
        }

        if(input.match(domainRegex) != null) {
            geolocationApiCountryDomain(input)
            .then(
                data => {
                    dispatch(
                        setIpData(data)
                    )
                }
            )
        }
    }

    return <section id='ip-input'>
        <h1>IP Address Tracker</h1>

        <form onSubmit={handleSubmit}>
            <input
            id='input'
            required
            type="text"
            minLength="7"
            placeholder='Search for any IP address or domain'
            onChange={event => setInput(event.target.value)} />

            <button type="submit">
                {`>`}
            </button>
        </form>
    </section>
}

export default IpInput