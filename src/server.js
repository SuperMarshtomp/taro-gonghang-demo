import axios from 'axios'

let instance = axios.create({
    baseURL: '/'
});

export default {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, {params}).then(r => {
                resolve(r.data);
            })
        })
    },
    post(url, params) {
        // console.log(url)
        return new Promise((resolve, reject) => {
            instance.post(url, params).then(r => {
                // console.log(url)
                resolve(r.data);
            })
        })
    }
}
