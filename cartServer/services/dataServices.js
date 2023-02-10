// import db
const db=require('./db');
// get all products details in db
const getProducts=()=>{

    return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                     status:true,
                statusCode:200,
                products:result
                }
               
        }
        else{
            return{
                status:false,
           statusCode:401,
           message:'products not found'
           }

        }
    }
    )
}
// addtowishlist

const addtowishlist =(id,title,price,image,description)=>{
  return db.wishlist.findOne({id}).then(
    (result)=>{
        if(result){
            return{
                status:false,
                statusCode:401,
                message:'product already added..'
            }
        }
        else{
            const newProduct=new db.wishlist({
                id,title,price,image,description
            })
            newProduct.save()
            return{
                status:true,
           statusCode:200,
           message:'product added successfully'
           }
        }
    }
  )
}

// get wishlist products details form db

const getwishlist=()=>{
    return db.wishlist.find().then(
        (result)=>{
            if(result){
                return{
                     status:true,
                statusCode:200,
                products:result
                }
               
        }
        else{
            return{
                status:false,
           statusCode:401,
           message:'wishlist is empty'
           }

        }
    }
    )
}
    const deletewish=(id)=>{
        return db.wishlist.deleteOne({id}).then(
            (result)=>{
                if(result){
                    return{
                        status:true,
                        statusCode:200,
                        products:result,
                        message:"product removed successfully",
                       
                    }
                }
                else{
                    return{
                        status:false,
                        statuscode:482,
                        message:'wishlist is empty'
                    }
                }
            }
        )
    }



module.exports={
    getProducts,
    addtowishlist,
    getwishlist,
    deletewish
}
