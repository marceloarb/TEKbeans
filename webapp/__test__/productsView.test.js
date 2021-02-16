const productsView = require("../productsView/productsView")
const productsRepo = require("../repository/productsRepo")
describe("productsView() Controller tests", () => {
    test("Empty products list", () => {
        let expected = [];
        productsRepo.query =  () => {
            return expected;
        }
        let actual = productsView.getProducts();
        expect(actual).toEqual(expected);
    }) 
    test("Populated products list", () => {
        let expected = ['iphone','motorolla','fusion','tundra'];
        productsRepo.query =  () => {
            return expected;
        }
        let actual = productsView.getProducts();
        expect(actual).toEqual(expected);
    }) 
}) 