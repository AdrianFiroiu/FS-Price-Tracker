const fs = require("fs");
const parser = require("../parser");

const productPage1HTML = fs.readFileSync("tests/html/test.html");

let parserResult;

beforeAll(() => {
    parserResult = parser(productPage1HTML);
})

describe("Parsing the EMAG - full price - individual product page", () => {
    test("EMAG - FP - Title", () => {
        expect(parserResult.title).toBe("Telefon mobil OnePlus 8T, Dual SIM, 128GB, 8GB RAM, 5G, Lunar Silver");
    });
    test("EMAG - FP - Price", () => {
        expect(parserResult.price).toBe("3.55000 Lei");
    });
});