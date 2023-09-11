const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log(`MONGO CONNECTED :\n${data.connection.host}`);
    });
};

module.exports = connectDatabase;
