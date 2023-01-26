const mongoose = require('mongoose') ; 

const uri = process.env.DATABASE; 

try {
  // Connect to the MongoDB cluster
  mongoose.set('strictQuery', false);
  mongoose.connect(
    uri ,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

const db = mongoose.connection;
db.on("error", (err) => console.log(`Connection error ${err}`));
db.once("open", () => console.log("Connected to DB!"));

module.exports = db ; 
