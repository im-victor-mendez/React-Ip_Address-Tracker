const api = 'https://geo.ipify.org/api/v2/'
const apiAccount = 'https://geo.ipify.org/service/'
const apiKey = 'apiKey=at_h77fa18JJd2PFsttcWEKxMivRc29A'

/* Consult account balance */
export async function geolocationAccountBalance() {
    const response = await fetch(`${apiAccount}account-balance?${apiKey}`)
    const data = await response.json()
    return data
}

export async function geolocationApiCountryIp(ipAddres) {
    const response = await fetch(`${api}country,city?${apiKey}&ipAddress=${ipAddres}`)
    const data = await response.json()
    return data
}

export async function geolocationApiCountryDomain(domain) {
    const response = await fetch(`${api}country,city?${apiKey}&domain=${domain}`)
    const data = await response.json()
    return data
}

/* Response
{
    "ip": "8.8.8.8",
    "location": {
        "country": "US",
        "region": "California",
        "city": "Mountain View",
        "lat": 37.40599,
        "lng": -122.078514,
        "postalCode": "94043",
        "timezone": "-07:00",
        "geonameId": 5375481
    },
    "domains": [
        "0d2.net",
        "003725.com",
        "0f6.b0094c.cn",
        "007515.com",
        "0guhi.jocose.cn"
    ],
    "as": {
        "asn": 15169,
        "name": "Google LLC",
        "route": "8.8.8.0/24",
        "domain": "https://about.google/intl/en/",
        "type": "Content"
    },
    "isp": "Google LLC"
}
*/