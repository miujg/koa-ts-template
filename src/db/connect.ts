/**
 * 数据库连接
 */

import {db} from '../config'
import * as mongoose from 'mongoose'

mongoose.connect(db.name)
const dbObj = mongoose.connection

dbObj.on('open', () =>{
  console.log('data connect success:', db.name)
})

export default dbObj