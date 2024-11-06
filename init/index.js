const mongoose = require('mongoose');
const initData = require("./data.js")
const Listing = require("../models/listing.js");

main().then(() => {
    console.log("connection successfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB = async () => {
    Listing.deleteMany({})// it will delete already exisisting data in collectiond
    await Listing.insertMany(initData.data)
    console.log("data was intialised");
}

initDB()