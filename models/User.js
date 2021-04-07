const {Schema, model, Types} = require('mongoose')

// базовая схема для пользователя
const schema = new Schema({
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    links: [{type: Types.Object, ref: 'Link'}]
})

module.export = model('User', schema)