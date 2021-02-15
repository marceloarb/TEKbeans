const productsRepo = require("../repository/productsRepo")
const queryProduct = () => {
    products = productsRepo.query()
    for(product in products){
        if(product == null){
            product = "UNKNOWN"
        }
    }
    return products;
}
module.exports = {
    queryProduct
    };