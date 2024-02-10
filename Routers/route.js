const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const cryp = require('crypto');
const URL = require('../Model/model');
router.post('/', async (req, res)=>{
    const url = req.body.urlId;
    const isUrlpre = await URL.findOne({orgId:url});
    const random = cryp.randomBytes(4).toString('hex');
    if(isUrlpre){
        res.json({
            msg: isUrlpre.shortId,
            exist:true,
            click: isUrlpre.click
         })
         return;
    }
    if(!validUrl.isUri(url)){
      res.json({
        msg:"Not Valid",
      })
      return;
    } 
     const t = await URL.create({
        orgId: url,
        shortId: random
     }).then((r)=>{
         res.json({
            msg: random
         })
     }).catch(er=>{
        res.json({
            msg:"Not empty"
         })
     })
});
router.get('/:id', async(req, res)=>{
    const id = req.params.id;
    await URL.findOneAndUpdate({ shortId: id }, { $inc: { click: 1 } });
     const result= await URL.findOne({shortId:id});
     res.redirect(result.orgId)
})
module.exports = router;
