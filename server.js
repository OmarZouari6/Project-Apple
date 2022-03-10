let express=require('express')
let app=express()
let connectDB = require('./config/connectDB')
const product = require('./routers/product')
const user = require('./routers/user')

connectDB()
let PORT=6000

app.use(express.json())

app.use('/product', product)
app.use('/user', user)


app.listen(PORT,(err)=>
err?console.log(err):console.log("server is started"))