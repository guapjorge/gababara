const router = require("express").Router()

router.get("/", (req,res)=> {
    res.render("homepage")
})

router.get("/login", (req,res)=> {
    res.render("login")
})

router.get("/gallery", (req,res)=> {
    res.render("gallery")
})


router.get("/painting", (req,res)=> {
    res.render("orderpage")
})

module.exports = router