const products = require('../productsView');
describe("sum()",()=>{
  test('adds 1 + 2 to equal 3', () => {
    let expected = 3;
    let actual = products.sum(1,2)
    expect(actual).toEqual(expected);
    });
})
  