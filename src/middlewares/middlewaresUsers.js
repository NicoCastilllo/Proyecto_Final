
export const pañolero = async (req,res,next)=>{
    if( req.isAuthenticated()){
        next()
    }else{
        res.status(200).redirect('/login')
    }

}

export const encargado = async (req,res,next) => {

    if( req.isAuthenticated() && req.user.type == "Encargado"){
       next()
    } else {
        res.status(200).redirect('/login')
    }

}