
const getAllProductInCart = async (req, res) => {
    try {
        res.render('./page/cart',{layout: 'layout/layoutNoSlider.ejs'})
    } catch (error) {
        res.send({ message: error });
    }
}

module.exports = { getAllProductInCart }