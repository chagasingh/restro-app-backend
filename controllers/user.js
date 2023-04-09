const User = require('../modals/orders')

exports.postUser = async (req,res,next)=>{

    try{
        console.log(req.body)
        const name = req.body.name;
        const phone = req.body.phone;
        const email = req.body.email;
        const reason = req.body.reason;

        const data = await User.create({ name:name,phone:phone,email:email,reason:reason })
        .then(result=>{
            console.log(result)
        })
        console.log(data)
        res.status(201).json({newUserDetails : data}) 
    }
    catch(err){
        console.log(err)
    }
}


exports.getUser = async(req,res,next)=>{
    try{
        const users = await User.findAll();
        console.log(`${users}------line 44 get`)
        res.status(200).json({allUsers:users})  
    }catch{
        console.log(err)
        res.sendStatus(500).json({err:'NO data show show'})
    }
    
}

exports.deleteUser = async (req,res,next) => {
    try{
        if (!req.params.id){
            console.log('ID is missing.....');
            res.status(404).json({err : 'ID is missing...'})
        }
        const uId = req.params.id;
        await User.destroy({where:{id:uId}})
        res.sendStatus(200);
    }catch(err){
        console.log(err)
        res.sendStatus(500).json(err)
    }
    
}


exports.getback = (req,res,next) => {
    res.send('Form is submitted')
}