  
const products = require("../productsView")

describe("Products available()", () => {
    test("Product is available", () => {
        let expected = "Iphone";
        let actual = products.getProducts();
        expect(actual).toEqual(expected);
    })  
    test("getProducts() returns null", () =>{
      
    })

})