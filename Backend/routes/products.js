import Product from '../models/products.js'
import express from 'express'
const router=express.Router();
router.get('/:categoryname/products',async(req,res)=>{
    try{
        const products=await Product.find({category:req.params.categoryname});
        res.json(products);
    }
catch(err){
    res.status(500).json({message:err.message});
}
});
router.get('/:categoryname/products/:productid',async(req,res)=>{
    try{
        const products=await Product.find({category:req.params.productid});
        res.json(products);
    }
catch(err){
    res.status(500).json({message:err.message});
}
});

router.post('/add',async(req,res)=>{
    const product=new Product(req.body);
    try{
        await product.save();
        res.send({message:"added successfully"});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})

router.get('/companies/:companyname/categories/:categoryname/products', async (req, res) => {
    const companyname = req.params.companyname;
    const categoryname = req.params.categoryname;
    const top = parseInt(req.query.top);
    const minPrice = parseInt(req.query.minPrice);
    const maxPrice = parseInt(req.query.maxPrice);
  
    if (!companyname || !categoryname || !top || !minPrice || !maxPrice) {
      return res.status(400).json({ error: 'Invalid input parameters' });
    }
  
    await Product.find({
      company: companyname,
      category: categoryname,
      price: { $gte: minPrice, $lte: maxPrice }
    })
    .sort({ rating: -1 })
    .limit(top)
    .then(products => {
      res.json(products);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
  });



export default router; 
