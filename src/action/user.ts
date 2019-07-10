import {User} from '../db/model'

const getUser = async () => {
  let users = await User.find({})
  return users
}

export {
  getUser
}