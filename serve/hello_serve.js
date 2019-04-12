const express = require('express')
const app = express()


app.use(express.static('../dist/stock-app'))


app.get("/",(req,res)=>{
  res.send('hello')
})
app.get('/products',(req,res)=>{
  res.json([
    {
      id:123,productId:1,desc:'这个商品很好',title:'这是第一个商品',rating:4,user:'zhangfei'
    },
    {
      id:123,productId:1,desc:'这个商品很好',title:'这是第一个商品',rating:4,user:'zhangfei'
    },
    {
      id:123,productId:1,desc:'这个商品很好',title:'这是第一个商品',rating:4,user:'zhangfei'
    },
    {
      id:123,productId:1,desc:'这个商品很好',title:'这是第一个商品',rating:4,user:'zhangfei'
    },
    {
      id:123,productId:1,desc:'这个商品很好',title:'这是第一个商品',rating:4,user:'zhangfei'
    },

    {
      id:123,productId:1,desc:'这个商品很好',title:'这是第一个商品',rating:4,user:'zhangfei'
    },
  ])
})

app.listen(4000,()=>{
  console.log('listen port 3000 success')
})
