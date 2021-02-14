const productsRepo = require("../repository/productsRepo")
const queryProduct = () => {
    return productsRepo.query();
}
module.exports = {
    queryProduct
    };