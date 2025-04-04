const sequelize = require('../connections/db')
const {DataTypes} = require('sequelize')

const UserBot = sequelize.define('wuserbot', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstname: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
    chatId: {type: DataTypes.STRING, unique: true},
    username: {type: DataTypes.STRING},
    avatar: {type: DataTypes.STRING},
})

const Message = sequelize.define('wmessage', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    conversationId: {type: DataTypes.STRING},
    senderId: {type: DataTypes.STRING},
    receiverId: {type: DataTypes.STRING},    
    text: {type: DataTypes.STRING}, //текст сообщения;
    type: {type: DataTypes.STRING},      //тип сообщения;
    isBot: {type: DataTypes.BOOLEAN},
    messageId: {type: DataTypes.STRING},
    buttons: {type: DataTypes.STRING},   //названия кнопок;
    replyId: {type: DataTypes.STRING}, //id пересылаемого сообщения
})

const Conversation = sequelize.define('wconversation', {
    members: {type: DataTypes.ARRAY(DataTypes.STRING)},
})

const Worker = sequelize.define('worker', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},  
    userId: {type: DataTypes.STRING}, 
    fio: {type: DataTypes.STRING},
    chatId: {type: DataTypes.STRING, unique: true},
    phone: {type: DataTypes.STRING},
    specialization: {type: DataTypes.TEXT},  
    city: {type: DataTypes.STRING},
    skill: {type: DataTypes.TEXT},
    rank: {type: DataTypes.INTEGER}, 
    company: {type: DataTypes.STRING},
    comteg: {type: DataTypes.TEXT},
    comment: {type: DataTypes.TEXT}, 
    age: {type: DataTypes.STRING},
    reyting: {type: DataTypes.STRING},
    passport: {type: DataTypes.TEXT},
    profile: {type: DataTypes.TEXT},
    passportScan: {type: DataTypes.TEXT},
    email: {type: DataTypes.STRING},  
    nik: {type: DataTypes.STRING},
    blockW: {type: DataTypes.BOOLEAN},
    deleted: {type: DataTypes.BOOLEAN}, //distrib
    great: {type: DataTypes.BOOLEAN}, //hello
    block18: {type: DataTypes.BOOLEAN}, 
    krest: {type: DataTypes.BOOLEAN}, //bad
})


module.exports = {
    UserBot, 
    Message, 
    Conversation, 
    Worker,
}