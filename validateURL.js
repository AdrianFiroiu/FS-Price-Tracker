const validURL = require('valid-url');

async function validateURL(url) {
    return validURL.isUri(url) ? true : false;
}

module.exports = validateURL;