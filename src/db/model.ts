import * as mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  // 0为普通用户 1为管理员
  type: Number,
  // 该用户设定了哪些目标
  targets: {type: Array}
})

const User = mongoose.model('User', userSchema)

export {
  User  
}