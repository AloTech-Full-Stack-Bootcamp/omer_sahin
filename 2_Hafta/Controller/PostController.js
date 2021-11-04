const Post=require('../models/Post')

exports.getCreate=async(req,res)=>{
    await Post.create(req.body)
    res.redirect('/')
  }

exports.getUpdate=async (req,res)=>{
    const posts=await Post.findOne({_id:req.params.id})
    posts.title=req.body.title
    posts.detail=req.body.detail
    posts.save()
    res.redirect(`/posts/${req.params.id}`)
  }
exports.getDelete=async (req,res)=>{
    const posts=await Post.findByIdAndRemove(req.params.id)
    res.redirect('/')
  }