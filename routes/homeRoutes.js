const router = require("express").Router()
const { Clothes, Furniture, Tech, Jewelry } = require("../models")

router.get("/", (req, res) => {
    res.render("homepage")
})

router.get("/login", (req, res) => {
    res.render("login")
})

router.get("/products", async (req, res) => {

    const clothingData = await Clothes.findAll()
    const clothes = clothingData.map(item => item.get({ plain: true }))
    const furnitureData = await Furniture.findAll()
    const furniture = furnitureData.map(item => item.get({ plain: true }))
    const jewelryData = await Jewelry.findAll()
    const jewelry = jewelryData.map(item => item.get({ plain: true }))
    const techData = await Tech.findAll()
    const tech = techData.map(item => item.get({ plain: true }))



    res.render("products", {
        clothes,
        furniture, 
        tech, 
        jewelry


    })
});

router.get("/furniture", async (req, res) => {
    const furnitureData = await Furniture.findAll()
    const furniture = furnitureData.map(item => item.get({ plain: true }))


    res.render("furniture", {
        furniture
    })
});

router.get("/technology", async (req, res) => {
    const techData = await Tech.findAll()
    const tech = techData.map(item => item.get({ plain: true }))

    res.render("technology",
        tech
    )
});



router.get("/jewelry", async (req, res) => {
    const jewelryData = await Jewelry.findAll()
    const jewelry = jewelryData.map(item => item.get({ plain: true }))

    res.render("jewelry",
        jewelry)
});


router.get("/checkout", (req, res) => {
    res.render("checkout")
});

module.exports = router