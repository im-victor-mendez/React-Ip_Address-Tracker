import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { setIp } from '../stateManagement/ipSlice';

function IpInput() {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    function handleSubmit(event) {
        event.preventDefault()
        dispatch(
            setIp(input)
        )
    }

    return <section id='ip-input'>
        <h1>IP Address Tracker</h1>

        <form onSubmit={handleSubmit}>
            {/* To add domain pattern */}
            <input
            type="text"
            minLength="7"
            maxLength="15"
            placeholder='Search for any IP address or domain'
            pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
            onChange={event => setInput(event.target.value)} />

            <button type="submit">
                {`>`}
            </button>
        </form>
    </section>
}

export default IpInput