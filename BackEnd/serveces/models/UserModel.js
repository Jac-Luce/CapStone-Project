import { Schema, model } from "mongoose";

//Creazione schema User
const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

        lastName: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: false
        },

        googleId: {
            type: String,
            required: false
        },

        booking: [{
            type: Schema.Types.ObjectId,
            ref: "Booking"
        }],
    },

    {
        collection: "users",
        timestamps: true
    }
);

//Esporto modello User che rispecchia lo schema userSchema
export default model("User", userSchema);