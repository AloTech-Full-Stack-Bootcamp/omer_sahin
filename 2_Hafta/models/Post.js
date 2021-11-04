const mongoose =require('mongoose')
const Schema=mongoose.Schema;
const date = new Date()

const PostSchema= new Schema({
    title:String,
     detail:String,
     dateCreated:
    {type:Date,
    default:date}
    
})

const Post = mongoose.model('Post',PostSchema)
module.exports=Post