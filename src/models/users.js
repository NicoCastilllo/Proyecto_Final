import mongoose from 'mongoose'

const usersCollection = 'users'

const usersSchema = new mongoose.Schema({

  username: { type: String, require: true },
  password: { type: String, require: true },
  name: { type: String, require: true },
  rank: {type:String,require:true},
  phone: {type: Number,require:true}
})

export default mongoose.model(usersCollection, usersSchema)