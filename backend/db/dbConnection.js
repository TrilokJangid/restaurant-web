import mongoose from 'mongoose';
export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'RESTAURENT'
    }).then(() => {
        console.log("conneted to database successfully")
    }).catch((err) => {
        console.log(`some error occurs during databse connection!${err}`)
    })
}