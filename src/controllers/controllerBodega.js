import Item from '../models/bodega.js'

export const viewBodega = async (req,res) => {
    try {
        let item =  await Item.find({}).lean()
          res.status(200).render('bodega',{articulos:item})
        } 
        catch (e) { console.log(e) }
}

export const createItem = async (req,res) => {
    try {
    
        const item= new Item(req.body)
        item.img = Math.floor(Math.random()*10000000) + ".jpg"
        await item.save()
        
        const EDFile = req.files.img
    
        EDFile.mv(`./public/img/items/${item.img}`,err => {
          if(err) return res.status(500).send({ message : err })
          return res.status(200).render("nofound",{message:"no se encontro el Producto"})
          })
        res.status(200).redirect('/bodega')
        
      } 
      catch (e) { console.log(e) }
      
}

export const delItem = async (req,res) => {
    try {
        const itemfound = await Item.find({_id:req.body._id}).lean()
           if ((Object.entries(itemfound).length === 0)) {
             return res.status(200).render("nofound",{message:"no se encontro el Producto"})
           }
           await Item.deleteOne({ _id: req.body._id }) 
           res.status(200).redirect('/bodega')
    } 
     catch (e) { console.log(e) }
     
}

export const updateItem = async (req,res) => {
    try {
        const itemfound = await Item.find({_id:req.body._id}).lean()
            if ((Object.entries(itemfound).length === 0)) {
              return res.status(200).render("nofound",{message:"no se encontro el Producto"})
            }
        await Item.findOneAndUpdate(
          { _id: req.body._id },
          { $set: req.body },
          { new: true }
        )  
        if(req.files){
          const EDFile = req.files.img
    
        EDFile.mv(`./public/img/items/${req.body.img }`,err => {
          if(err) return res.status(500).send({ message : err })
          return res.status(200).render("nofound",{message:"no se encontro el Producto"})
          })
        }
        res.status(200).redirect('/bodega')
      } 
      catch (e) { console.log(e) }
     
}