const mongoose = require("mongoose")

const DB_USER = process.env.DB_USER
const DB_PW = process.env.DB_PW;

const connection = async () => {
    try{
        const dbConnection = await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PW}@cluster0.kdkkhnx.mongodb.net/?retryWrites=true&w=majority`
        )
        console.log('MongoDB conectado')
        return dbConnection
    }catch(error){
        console.log(error)
    }
    connection();
}

module.exports = connection;