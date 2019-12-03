const baseUrl = 'http://localhost:3000/'
const usersUrl = baseUrl + 'users/'
const addCountryToUserURL = baseUrl + 'add-user-country'
const addCountryToWishListURL = baseUrl + 'add-to-wishlist'

class API {
    static countryInfo = () => (
        fetch(baseUrl + '/countries-and-info')
            .then(res => res.json())
    )

    static addCountryToUser = (userId, countryId) => (
        this.post(addCountryToUserURL, { userId, countryId })
    )

    static addCountryToWishList = (userId, countryId) => (
        this.post(addCountryToWishListURL, { userId, countryId })
    )

    static updateAge = (userId, age) => (
        this.patch(usersUrl + userId, { age })
    )

    static login = (fb_id, userData) => (
        fetch(baseUrl + 'login', {
            method: 'POST',
            headers: {
                Authorization: fb_id,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        }).then(resp => resp.json())
    )

    static travelLocations = (query) => (
        fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=${query}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "571c034a1amshba07a35df5f1f2bp163af5jsn9566c59b5b86",
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .catch(err => console.log(err))
    )

    static createFlightSession = (departureLocation, destination, departureDate, returnDate) => (
        this.post(baseUrl + 'countries/recommendations', { departureLocation, destination, departureDate, returnDate })
    ).then(console.log)

    // static recommendations = (country) => (
    //     fetch(`https://www.triposo.com/api/20190906/location.json?id=${country}&account=SNWVY7BT&token=iwqr7pi47cyfp8tobp16qxx6luhn0k0f`).then(resp => resp.json()).then(console.log)
    // )

    static validate = (fb_id) => (
        fetch(baseUrl + 'validate', {
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

    static patch = (url, data) =>
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())
}

export default API