const needle = require("needle");
const fs = require("fs");
const validateURL = require("./validateURL");

async function getRequest (url) {
    const isValid = await validateURL.isValidURL(url);
    if (isValid) {
        const result = await needle('get', url);
        return result.body;
    }
}

function saveHTML(html) {
    fs.writeFileSync("./tests/html/EMAG-ProdPage.html", html);
}

module.exports = {
    getRequest,
    saveHTML
}