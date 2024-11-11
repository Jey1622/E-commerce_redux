const Product=require("../models/Product")

exports.getProducts=async (req,res,next)=>{
    try {
        const products=await Product.find({});
        res.json(products)
    } catch (error) {
        console.log(err)
        res.status(404).json({"error":error.message})
    }
}