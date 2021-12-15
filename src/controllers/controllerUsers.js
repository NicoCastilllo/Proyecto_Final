import User from '../models/users.js'

export const viewLogin = (req,res) =>{
    
    res.status(200).render('login')
}
export const login = async (req,res) =>{
    res.status(200).redirect('/bodega')
}
export const viewRegister = (req,res) =>{
    
    res.status(200).render('register')
}

export const register = async (req,res) =>{
       try{
        const user = await User(req.body)
        user.save()
        res.status(200).redirect('/login')
      }catch(e){console.log(e)}
}

export const logout = async (req, res) => {
    try {
      const user = await User.find({ username: req.user.username }).lean()
      await req.session.destroy(err => {
        if (err) return err
        res.status(200).redirect('/login')
      })
    } catch (e) { console.log(e) }
  }