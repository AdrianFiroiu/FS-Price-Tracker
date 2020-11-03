const httpRequest = require("./httpRequest");
const config = require("./config/config");

async function saveHTML(urls) {
    await Promise.all(urls.map(async (url) => {
        const html = await httpRequest.getRequest(url);
        await httpRequest.saveHTML(html);
    }));

    // urls.forEach(element => {
    //     const html = await httpRequest.getRequest(element);
    //     await httpRequest.saveHTML(html);
    // });
}

let emagProdArr = [
    'https://www.emag.ro/telefon-mobil-oneplus-8t-dual-sim-128gb-8gb-ram-5g-lunar-silver-5011101268/pd/DRB0K2MBM/?X-Search-Id=6cc64cac6ae73843e8d3&X-Product-Id=7110363&X-Search-Page=1&X-Search-Position=1&X-Section=search&X-MB=0&X-Search-Action=view',
    'https://www.emag.ro/telefon-mobil-huawei-p40-pro-dual-sim-256gb-8gb-ram-5g-ice-white-51095exn/pd/DRQL1BMBM/?X-Search-Id=03a044b212f3863e1caf&X-Product-Id=6467215&X-Search-Page=1&X-Search-Position=7&X-Section=search&X-MB=0&X-Search-Action=view'
];



saveHTML(emagProdArr);
