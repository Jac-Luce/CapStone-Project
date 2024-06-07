import { Schema, model } from "mongoose";

//Creazione schema prenotazioni
const bookingSchema = new Schema(
    {
        user: {
            /*type: String,
            required: true*/
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        
        service:  { 
            /*type: String,
            required: true*/
            type: Schema.Types.ObjectId,
            ref: "Service"
        } ,

        date: {
            type : String,
            required: true
        }
    },
    {
        collection: "booking",
        timestamps: true
    }
);

export default model("Booking", bookingSchema);