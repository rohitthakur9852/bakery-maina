const app =require("./app");
const cloudinary = require("cloudinary");
const connectDB = require("./config/database");
const dotenv = require("dotenv")

dotenv.config()


// //Handling uncaughtException
// process.on("uncaughtException",(err)=>{
//    console.log(`Error ${err.message}`);
//    console.log(`Shutting down the server due to Unhandled Promise Rejection.`);

//    process.exit(1);
// })


// //config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//    require("dotenv").config({ path: "backend/config/config.env" });
//  }
 

//connecting Databse
// connectDatabase();



// const server = app.listen(process.env.PORT, ()=>{

//  //  console.log(`Server is working on http://localhost:${process.env.PORT}`)
// })

// //Unhandled Promise Rejection
// process.on("unhandledRejection", (err) =>{
//    console.log(`Error ${err.message}`);
//    console.log(`Shutting down the server due to Unhandled Promise Rejection.`);

//    server.close(()=>{
//       process.exit(1);
//    });
// });

 // delete all the rest of the code, not needed
 
const port = process.env.PORT || 3000;
console.log(process.env.DB_URI)
connectDB().then(() => {
  app.listen(port, () => console.log(`server is running on port:${port}`))
  cloudinary.config({
   cloud_name: process.env.CLOUDINARY_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
 });

}).catch((error) => console.log(`there was some error: ${error}`));
