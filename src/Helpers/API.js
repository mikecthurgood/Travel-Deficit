const baseUrl = 'http://localhost:3000/'
const addCountryToUserURL = baseUrl + 'add-user-country'

class API {

    static addCountryToUser = (userId, countryId) => (
        this.post(addCountryToUserURL, { userId, countryId })
    )

    static login = (fb_id, userData) => (
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                Authorization: fb_id,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        }).then(resp => resp.json()).then(console.log)
    )

    static validate = (fb_id) => (
        fetch('http://localhost:3000/validate', {
            headers: {
                Authorization: fb_id
            }
        }).then(resp => resp.json())
    )

    static post = (url, data) =>
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())
}

export default API