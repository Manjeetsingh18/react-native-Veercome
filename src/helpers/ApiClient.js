import { create } from 'apisauce';
import config from '../config/appconfig';


const api = create({
    baseURL: config.development.apiUrl,
    headers: { Accept: 'application/json' }
});

function post(endpoint, param) {
    return new Promise((resolve, reject) => {
        fetch(`${config.development.apiUrl}${endpoint}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, application/xml, text/play, text/html, *.*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: param
        }).then(async (res) => {
            let response = await res.json();
            if (!res.ok) {
                return reject(response);
            }
            return resolve(response);
        }).catch(reject);
    });
}

module.exports = {
    post
};