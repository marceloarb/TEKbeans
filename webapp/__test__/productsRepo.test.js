jest.mock('../productsRepo')
const products = require("../productsRepo")
const productsList = {
    'cellphones': ['iphone','motorolla'],
    'cars':['fusion','tundra']
}
describe("Products available()", () => {
    test("ProductView returns an empty arrays", () => {
        let expected = [];
        products.query = jest.fn()
        let actual = products.queryProducts()
        expect(actual.mock.calls).toEqual(expected);
    })  
    test("QueryProqueryProducts() returns products ", () =>{
        let expected = productsList;
        products.query = jest.fn()
        let actual = products.queryProducts()
        console.log(products.queryProducts())
        expect(actual.mock.calls).toEqual(expected);
    })
})