const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${connection.connection.host}`.cyan.underline.bold);
    } catch(e) {
        console.error(`Error: ${e.message}`);
        process.exit(1);
    }
};


module.exports = connectDB;