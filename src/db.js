import mongoose from "mongoose";

const connectToDB = async () => {
    const DB_URI = process.env.DB_URI;

    if(!DB_URI){
        console.error("DB URI not defined");
        return;
    }

    try{
        await mongoose.connect(DB_URI);
        console.log("Connected to DB");
    }
    catch(e){
        console.error("Error occured while connecting to DB");
        process.exit(1);
    }
}

export default connectToDB;