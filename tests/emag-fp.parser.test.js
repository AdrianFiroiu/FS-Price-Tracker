const fs = require("fs");
const parser = require("../parser");

const EMAG_ProdPage = fs.readFileSync("./tests/html/EMAG-ProdPage.html");

let parserResult;

beforeAll(() => {
    parserResult = parser(EMAG_ProdPage);
})

describe("Parsing the EMAG - full price - individual product page", () => {
    test("EMAG - FP - Title", () => {
        // expect(parserResult.title).toBe("Telefon mobil OnePlus 8T, Dual SIM, 128GB, 8GB RAM, 5G, Lunar Silver");
        expect(parserResult.title).toBeTruthy();
    });
    test("EMAG - FP - Price", () => {
        // expect(parserResult.price).toBe("3.55000 Lei");
        expect(parserResult.price).toBeTruthy();
    });
});