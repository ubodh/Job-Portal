const {modal} =require("../model/model")
module.exports.home = function(req,res){
  
        
        return res.render('homePage.ejs')
   
}
module.exports.jobs=function(req,res){
    return res.render('jobs.ejs')
   
}
module.exports.login=function(req,res){
    return res.render('login.ejs')
   
}
module.exports.postjob=function(req,res){
    return res.render('postjobs.ejs')
   
}
module.exports.job1=function(req,res){
    return res.render('job1.ejs')
   
}
module.exports.job2=function(req,res){
    return res.render('job2.ejs')
   
}
module.exports.job3=function(req,res){
    return res.render('job3.ejs')
   
}