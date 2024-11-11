const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
require('dotenv').config()
const products=require('./routes/product')
const orders=require('./routes/order')

const app=express()
const port=process.env.PORT

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.use('/api/v1',products)
app.use('/api/v1',orders)



mongoose.connect(process.env.DB_URI)
.then(()=>console.log("mongoDB connected"))
.catch(err=>console.log(err))



app.listen(port,()=>{
    console.log(`server is running ${port}`)
})