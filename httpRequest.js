const needle = require("needle");
const fs = require("fs");
const validateURL = require("./validateURL");
const config = require("./config/config");

async function getRequest (url) {
    const isValid = await validateURL.isValidURL(url);
    const URLDomain = await validateURL.getURLDomain(url);
    const isDomainSupported = await validateURL.isDomainSupported(config, URLDomain);
    console.log(isDomainSupported);
    console.log(typeof(config));
    console.log(URLDomain);
    if (isValid) {
        const result = await needle('get', url);
        return result.body;
    }
}

async function saveHTML(html) {
    // console.log(html);
    // await Promise.all(html.map(async (htmls) => {
    //     console.log(htmls);
    // }));
    // await fs.writeFile("./tests/html/EMAG-ProdPage.html", html)
    // fs.writeFileSync("./tests/html/EMAG-ProdPage.html", html);
}

module.exports = {
    getRequest,
    saveHTML
}