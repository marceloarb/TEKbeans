jest.mock('../productsRepo')
const products = require("../productsRepo")
const productsList = {
    'cellphones': ['iphone','motorolla'],
    'cars':['fusion','tundra']
}
describe("Products available()", () => {
    test("ProductView returns an empty arrays", () => {
        let expected = [];
        const actual = products.query.mockImplementation(() => []);
        expect(actual()).toEqual(expected);
    })  
    test("QueryProqueryProducts() returns products ", () =>{
        let expected = productsList;
        const actual = products.query.mockImplementation(() => productsList);
        expect(actual()).toEqual(expected);
    })
})