const environment = {
    development: {
        apiUrl: 'https://devqa5-go.vroozi.com/'
    },
    production: {
        apiUrl: 'https://devqa5-go.vroozi.com/'
    }
};

let AuthToken;

module.exports = Object.assign(
    {
        AuthToken
    },
    environment
);