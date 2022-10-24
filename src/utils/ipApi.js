const api = 'https://api.ipdata.co?'
const apiKey = 'api-key=9e65fa253464a8aba1b8d09d1c0c023470b4562587278bf4cc9d2490'

export async function ipApi() {
    const response = await fetch(`${api}${apiKey}`)
    const data = await response.json()
    return data
}