import React, { useState } from 'react'

function IpInput() {
    const [input, setInput] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        console.log(input)
    }

    return <section id='ip-input'>
        <h1>IP Address Tracker</h1>

        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder='Search for any IP address or domain'
            onChange={event => setInput(event.target.value)} />

            <button type="submit">
                {`>`}
            </button>
        </form>
    </section>
}

export default IpInput