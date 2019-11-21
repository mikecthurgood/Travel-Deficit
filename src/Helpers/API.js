const baseUrl = 'http://localhost:3000/'

class API {

    static login = (fb_id, userData) => (
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                Authorization: fb_id,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        }).then(resp => resp.json())
    )

    static validate = (fb_id) => {
        fetch('http://localhost:3000/validate', {
            headers: {
                Authorization: fb_id
            }
        }).then(resp => resp.json()).then(console.log)
    }

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