import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import passport from "passport";
import { adminRoute } from "./serveces/routes/AdminRoute.js";
import { serviceRoute } from "./serveces/routes/ServicesRoute.js";
import requestMiddlew from "./serveces/middlewares/requestMiddlew.js";
import { bookingRoute } from "./serveces/routes/BookingRoute.js";
import { badRequest, notFound, unauthorized, genericError } from "./serveces/middlewares/errorHandlers.js";
import { authMiddleware } from "./serveces/authentication/auth.js";
import { authRoute } from "./serveces/routes/AuthRoute.js";

//Inizializzo la gestione dei file .env
config();

//Creo una porta d'accesso
const PORT = process.env.PORT || 3001;

//Creo il server
const app = express();

//Abilito comunicazione con il FrontEnd
app.use(cors());

//Abilito comunicazione con dati json
app.use(express.json());

//Middleware che comunica le richieste http effettuate
app.use(requestMiddlew);
//app.use(authMiddleware);

//Importo Routes
app.use("/", authRoute);
app.use("/user", adminRoute);
app.use("/services", serviceRoute);
app.use("/booking", bookingRoute);

/*//Route di default per pagina non trovata
app.get("*", function(req, res, next) {
    const error = new Error("404 Not Found!");
    error.status = 404;

    next(error);
});*/

//Middleware gestione errori
app.use(badRequest);
app.use(unauthorized);
app.use(notFound);
app.use(genericError);

// Abilito il server connettendo anche il database
const initServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Sei connesso al database.");

        //Abilito il server
        app.listen(PORT, () => {
            console.log("Il nostro server sta ascoltando alla porta " + PORT);
        });
    } catch (error) {
        console.error("Connessione al database falliata!", error);
    }
};

initServer();