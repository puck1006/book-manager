const express = require('express')

const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/book-manager',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:true
})

const articleSchema = new mongoose.Schema({
    title:{type:String},
    body:{type:String}
})

const Artical = mongoose.model('Artical',articleSchema)


app.use(require('cors')())
app.use(express.json())

app.get('/' ,(req,res) =>{
    res.send('ok')
})

//查找所有文章
app.get('/api/articles', async (req,res) =>{
    const data = await Artical.find()
    res.status(200).send(data)
})


//添加文章
app.post('/api/articles' , async (req,res) =>{
    const data =await Artical.create(req.body)

    res.status(200).send({
        message:'添加成功',
        data
    })
})

//删除文章
app.delete('/api/articles/:id' ,async(req,res) =>{
    const removeData = await Artical.findByIdAndDelete(req.params.id)

    res.status(200).send({
        message:'删除成功',
        removeData
    })
    
})

//根据id查找 （编辑）
app.get('/api/articles/:id',async (req,res) =>{
    const articleData = await Artical.findById(req.params.id)
    res.status(200).send({
        message:'查找成功',
        articleData
    })
})

//根据ID更新内容并且保存
app.put('/api/articles/:id', async(req,res) =>{
    const updata = await Artical.findByIdAndUpdate(req.params.id,req.body)

    res.status(200).send({
        message:'更新数据成功',
        updata
    })
})












app.listen(3000, () =>{
    console.log("http:localhost:3000 is running")
})