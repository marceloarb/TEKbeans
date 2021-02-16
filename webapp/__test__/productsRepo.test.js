const productsRepo = require("../repository/productsRepo");
const productsServ = require("../services/productsService");
jest.mock('../repository/productsRepo');
const productsList = {
    'cellphones': ['iphone','motorolla',null],
    'cars':['fusion','tundra'],
};
// describe("Products available()", () => {
//     // test("ProductView returns an empty arrays", () => {
//     //     let expected = [];
//     //     productsRepo.query();
//     //     const actual = productsServ.queryProduct();
//     //     expect(actual).toEqual(expected);
//     // })  
//     // test("QueryProducts() returns products ", () =>{
//     //     let expected = productsList;
//     //     productsRepo.query.mockImplementation(() => productsList);
//     //     const actual = productsServ.queryProduct()
//     //     expect(actual).toEqual(expected);
//     // })
// });