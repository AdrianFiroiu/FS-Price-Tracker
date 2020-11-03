const validURL = require('valid-url');

function isValidURL(url) {
    return validURL.isUri(url) ? true : false;
}

function getURLDomain(url) {
    const URLObj = new URL(url);
    return URLObj.host ? URLObj.host : false;
}

function isDomainSupported(domain, searchKey) {
    return domain.filter(function(obj) {
        return Object.keys(obj).some(function(key) {
            return obj[key].includes(searchKey);
        })
    });
}

module.exports = {
    isValidURL,
    getURLDomain,
    isDomainSupported
};