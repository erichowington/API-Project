import mongoose from "mongoose";

const Schema = mongoose.Schema;

let PlanetSchema = new Schema ({
        "name": { type: String },
        "mass": { type: String },
        "diameter": { type: String },
        "meanRadius": { type: String },
        "density": { type: String },
        "gravity": { type: String },
        "escapeVelocity": { type: String },
        "distanceFromSun": { type: String },
        "orbitalPeriod": { type: String },
        "dayLength": { type: String },
        "moons": { type: Number },
        "photo": { type: String }
})

export default mongoose.model("planets", PlanetSchema);