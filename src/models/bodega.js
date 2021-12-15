import mongoose from 'mongoose'

const itemsCollection = 'Items'

const itemsSchema = new mongoose.Schema({
  name: { type: String, require: true },
  desc: {type: String, require: true},
  state: {type: String, require: true},
  price: {type: Number, require: true},
  img: {type: String, require: true},
})

export default mongoose.model(itemsCollection, itemsSchema)