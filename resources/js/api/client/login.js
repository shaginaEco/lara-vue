
const ROOT_URL = "http://127.0.0.1:8000"

import axios from "axios"


export default {
    generateToken() {

        return axios.post(`${ROOT_URL}/tokens/`)
            .then(tokens => { return tokens.data })
    },

    getToken(token) {
        return axios.get(`${ROOT_URL}/tokens/${token}`)
    },

    login(username) {

        return axios.post(`${ROOT_URL}/users/${username}`)
            .then(res => { return res })
            .catch(err => {
                console.log(err)
            })
    },

    fetchCalendar(token, user) {
        return axios.get(`${ROOT_URL}/users/${user}/calendar?auth=${token}`)
            .then(res => { return res })
            .catch(err=>{
                console.log(err)
            })
    },


    uploadEvent(token, user, event) {
        return axios.put(`${ROOT_URL}/users/${user}/calendar/events?auth=${token}`, event)
            .then(res => {
                return res
            })
            .catch(err=>{
                console.log(err)
            })
    },

    deleteEvent(token, user, event) {
        return axios({
            url: `${ROOT_URL}/users/${user}/calendar/events?auth=${token}`,
            method: "delete",
            data: event,
            headers: {
                "content-type": 'application/json; charset=utf-8',
                "Content-Type": 'application/json',
                "Accept": "application/json"
            }
        });
    }

}