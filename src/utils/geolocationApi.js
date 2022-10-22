const api = 'https://geo.ipify.org/api/v2/'
const apiAccount = 'https://geo.ipify.org/service/'
const apiKey = 'apiKey=at_h77fa18JJd2PFsttcWEKxMivRc29A'

/* Consult account balance */
export async function geolocationAccountBalance() {
    const response = await fetch(`${apiAccount}account-balance?${apiKey}`)
    const data = await response.json()
    return data
}

export async function geolocationApiCountry(ipAddres) {
    const response = await fetch(`${api}country?${apiKey}&ipAddress=${ipAddres}`)
    const data = await response.json()
    return data
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
        "21vek-api-26924.21vek-dev.by",
        "21vek-api-26926.21vek-dev.by",
        "21vek-api-26954.21vek-dev.by",
        "21vek-api-26985.21vek-dev.by",
        "21vek-dev.by"
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