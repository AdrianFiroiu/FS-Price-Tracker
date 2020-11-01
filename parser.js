const cheerio = require("cheerio");

function parseAll(html) {
    const $ = cheerio.load(html);

    const price = $("div.w-50.mrg-rgt-xs p.product-new-price").text().trim();
    const title = $("h1.page-title").text().trim();


    return { price, title }
}

module.exports = parseAll;