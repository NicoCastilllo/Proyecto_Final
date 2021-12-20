import Item from '../models/bodega.js'

export const viewStorage = async (req,res) => {
    try {
        let item =  await Item.find({}).lean()
          res.status(200).render('bodegapl',{articles:item})
        } 
        catch (e) { console.log(e) }
}

export const editState = async (req,res) => {
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
    res.status(200).redirect('/bodegapl')
      } 
      catch (e) { console.log(e) }
}