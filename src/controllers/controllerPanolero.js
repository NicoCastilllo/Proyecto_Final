import Item from '../models/bodega.js'

export const viewStorage = async (req,res) => {
    try {
        let item =  await Item.find({}).lean()
          res.status(200).render('bodegapl',{articles:item})
        } 
        catch (e) { console.log(e) }
}
