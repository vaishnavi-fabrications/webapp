const itemModel = require('../models/ItemModel');

const AddITem = async (req,res) =>{
  try{
    const dup = await itemModel.findOne(req.body);
    if(dup){
        throw new Error('Duplicate Entry');
    }else{
        const item = new itemModel(req.body);
        const saved = await item.save();
        if(saved){
            res.status(200).json({
                success:true,
                message:"item Added !"
            });
        }else{
            throw new Error('Failed to save... ')
        }
    }
  }catch(e){
    res.status(500).json({
        success:false,
        message:e.message
    });
  } 
};

const getSingleCategory = async (req,res)=>{
    try{
        const result = await itemModel.find({category:req.params.category});
        if(result){
            res.status(200).json({
                success:true,
                result
            });
        }else{
            throw new Error('no results found !');
        }
    }catch(e){
        res.status(500).json({
            success:false,
            message:e.message
        });
    }
}

const DeleteItem = async (req,res) =>{
    try{    
        const item = await itemModel.findOne({_id:req.params.id});
        if(item){
            const deleted = await itemModel.deleteOne({id:req.params.id});
            if(deleted){
                res.status(200).json({
                    success:true,
                    message:"Deleted !"
                });
            }else{
                throw new Error("Failed to delete !");
            }
        }else{
            throw new Error('Item Not Found !');
        }
    }catch(e){
        res.status(500).json({
            success:false,
            message:e.message
        });
    }
}


module.exports = { AddITem , getSingleCategory, DeleteItem };