const needle = require("needle");
const fs = require("fs");
const validateURL = require("validateURL");

async function getRequest (url) {
    if (validateURL.validateURL(url)) {
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