const productsRepo = require("../repository/productsRepo");
const productsServ = require("../services/productsService");
jest.mock('../repository/productsRepo');
const productsList = [
    {
        "id": 1 ,
        "title": "Crop",
        "key": "#2324",
        "price": 28.99 ,
        "inventory":4
    },
    {
        "id": 2 ,
        "title": "marcelo",
        "key": "#232334",
        "price": 28.99 ,
        "inventory":0
    }
];
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
describe("Products unavailable()", () => {
    test("Checking products quantity equal to zero", () => {
        let expected = "Buying more";
        let actual = productsServ.queryProduct();
        expect(actual).toEqual(expected);
    })
} )
