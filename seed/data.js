import db from "../db/connection.js";
import chalk from "chalk";
import Planet from "../models/Planets.js";
import planetsData from "./planets.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase();

  await Planet.create(planetsData);

  console.log(chalk.greenBright("PLANETS CREATED!"));

  await db.close();
};

insertData();