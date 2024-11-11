const mongoose=require('mongoose')
// const { ARRAY } = require('sequelize')

const orderSchema=new mongoose.Schema({
    cartItems:Array,
    amount:String,
    status:String,
    CreatedAt:Date
})

const ordermodel=mongoose.model('Order',orderSchema)

module.exports=ordermodel