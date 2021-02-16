const productsRepo = require("../repository/productsRepo")
const getProducts = () => {
    return productsRepo.query();
}

module.exports = {
    getProducts
}