const validURL = require('valid-url');

function isValidURL(url) {
    return validURL.isUri(url) ? true : false;
}

module.exports = { isValidURL };