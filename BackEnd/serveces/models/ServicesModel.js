import { Schema, model } from "mongoose";

//Creazione schema per i servizi
const serviceSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: false
        },

        price: {
            type: String,
            required: true
        }
    },
    {
        collection: "services",
        timestamps: true
    }
);

export default model("Service", serviceSchema);