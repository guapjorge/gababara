const router = require('express').Router();
const fs = require('fs');
const { connect } = require('../routes');


router.get('/' , (request,response) => {
    
    const query = 'SELECT *FROM  product ';

    connect.query(query )

    if(!request.session.cart)
    {
        request.session.cart = [];
    }

    response.render('product',{ products : request.session.cart} );


 }),


router.post('/add_cart', (request, response) => {
    const product_id = request.body.product_id;

    const product_name = request.body.product_name;

    const product_price = request.body.product_price;

    let count = 0;

    for(let i = 0; i < request.session.cart.length; i++ );
{

    if(request.session.cart[i].product_id === product_id); 
    
    {
        request.session.cart[i].quantity += 1; 
        
        count++;
        
        
    }
}
if (count === 0)
{
    const cart_data = {
        product_id : product_id,
        product_name: product_name,
        product_price: parseFloat(product_price),

    };

    request.session.cart.push(cart_data);

    response.redirect('/');
}

});

router.delete('', (req,res) => {
    let data = fs.readFileSync("", "");
    const dataJSON =  JSON.parse(data);
    const newNotes = dataJSON.filter((product) => { 
      return product.id !== req.params.id;
    });
    fs.writeFileSync("",JSON.stringify(newNotes));
    res.json("item deleted.");


    

});


module.exports = router




