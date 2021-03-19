const mongoose = require('mongoose');


const conn = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://drockss:drockss7120@demo.urs1j.gcp.mongodb.net/urlshortner?retryWrites=true&w=majority", 
            {useNewUrlParser: true , useUnifiedTopology: true }); 
        console.log("Connected to database");
       }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
}



module.exports = {conn};