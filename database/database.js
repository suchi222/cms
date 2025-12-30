const mongoose = require("mongoose")

exports.connectDatabase = async()=>{
  // connecting to database
//   jaba samma database sanga connect hudainw wait gar
  await mongoose
    .connect(
   "mongodb+srv://thapasuchitra10_db_user:hello@cluster0.1u7rzu3.mongodb.net/?appName=Cluster0"
    )
  console.log("Database connected successfully")
}