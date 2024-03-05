import mongoose from "mongoose";
import chalk from "chalk";

mongoose.set("returnOriginal", false);

mongoose.connect("mongodb://127.0.0.1:27017/planets").catch((err) => {
  console.log(`Error connection to MongoDB: ${err.message}`);
});

mongoose.connection.on("connected", () => {
  console.log(chalk.bold("connected to MongoDB!"));
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("disconnected from MongoDB!"));
});


mongoose.connection.on("error", (err) => {
  console.log(chalk.bold(`MongoDB connection error: ${err}`));
});

export default mongoose.connection;