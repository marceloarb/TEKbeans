const productsRepo = require("../productsRepo");
const productsServ = require("../productsService");
jest.mock('../productsRepo');
const productsList = {
    'cellphones': ['iphone','motorolla'],
    'cars':['fusion','tundra']
};
describe("Products available()", () => {
    test("ProductView returns an empty arrays", () => {
        let expected = [];
        productsRepo.query.mockImplementation(()=>[]);
        const actual = productsServ.queryProduct();
        expect(actual).toEqual(expected);
    })  
    test("QueryProducts() returns products ", () =>{
        let expected = productsList;
        productsRepo.query.mockImplementation(() => productsList);
        const actual = productsServ.queryProduct()
        expect(actual).toEqual(expected);
    })
    
});