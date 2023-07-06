const router = require("express").Router()
const { Clothes, Furniture, Tech, Jewelry } = require("../models")

router.get("/", (req, res) => {
    res.render("homepage")
})

router.get("/login", (req, res) => {
    res.render("login")
})

//where all the products are and a display of whats in the cart
router.get("/products", async (req, res) => {

    const clothingData = await Clothes.findAll()
    const clothes = clothingData.map(item => item.get({ plain: true }))
    
    const techData = await Tech.findAll()
    const tech = techData.map(item => item.get({ plain: true }))

    res.render("products", {
        clothes, tech
    })
})



//where all item is cart  should be sent so the will be in the cart  
router.get("/painting", (req, res) => {
    res.render("painting")
})

router.get("/checkout", (req, res) => {
    res.render("checkout")
})

module.exports = router