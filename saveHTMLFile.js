const httpRequest = require("./httpRequest");

async function saveHTML(url) {
    const html = await httpRequest.getRequest(url);
    await httpRequest.saveHTML(html);
}

saveHTML(
    "https://www.emag.ro/telefon-mobil-oneplus-8t-dual-sim-128gb-8gb-ram-5g-lunar-silver-5011101268/pd/DRB0K2MBM/?X-Search-Id=6cc64cac6ae73843e8d3&X-Product-Id=7110363&X-Search-Page=1&X-Search-Position=1&X-Section=search&X-MB=0&X-Search-Action=view"
);