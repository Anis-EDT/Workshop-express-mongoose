var express = require('express');
var router = express.Router();
const User = require('../schemas/userSchema')



router.get('/',function(req,res){
  console.log('heyyy')
  User.find().then((u)=>{
    console.log('heyy') 
     res.send(u)
  })
  .catch((err)=> res.send(err))
})


router.get('/:id',function(req,res){
  console.log('heyyy')
  User.findOne({_id  : req.params.id }).then((u)=>{
    if( u)
    {res.send(u)}
    else
    res.send('none')
  }).catch((err)=>res.send(err))

})

router.post('/' , function(req,res){
    user = new User({
      name : req.body.name,
      familyName: req.body.familyName, 
      email:   req.body.email
    })
    user.save().then((u)=> res.send(u)).catch((err)=> res.status(400).send(err))
})
router.put('/:id' , function(req,res){
  User.findOneAndUpdate({_id : req.params.id}, {$set : {...req.body}}).then((u) =>res.send('edited'))
  .catch((err)=>res.send(err))
})
router.delete('/:id' , function(req,res){
  User.findOneAndRemove({_id : req.params.id}).then((u) =>res.send('delete'))
  .catch((err)=>res.send(err))
})

module.exports = router;
