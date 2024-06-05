import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";
import { config } from "dotenv";

config();

//Generiamo il JWT
export const generateJWT = (payload) => {

    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {expiresIn: "1d"},
            (err, token) => { //Callback che controlla se c'è errore o se c'è token

                if (err) {
                    reject(err); //Rimanda errore
                } else {
                    resolve(token); //Rimanda token generato
                }
            }
        );
    });
};

//Verifichiamo se il JWT è valido
export const verifyJWT = (token) => {

    return new Promise((resolve, reject) => {
        //Verifica token
        jwt.verify(
            token,
            process.env.JWT_SECRET,
            (err, decoded) => { //Callback controlla se il token è valido lo decodifica, altrimenti genera errore

                if (err) {
                    reject(err);
                } else {
                    resolve(decoded);
                }
            }
        );
    });
};

//Creazione middleware autenticazione
export const authMiddleware = async(req, res, next) => {
    try {
        if(!req.headers.authorization) { //Se il token non è presente nell'header
            res.status(400).send("Effettua il login");
        } else {
            //Il token è stato fornito, verifichiamo se è valido e togliamo stringa 'Bearer '
            const decoded = await verifyJWT(
                req.headers.authorization.replace("Bearer ", "")
            );
            //Verifichiamo che il token esista con exp
            if (decoded.exp) {
                //Se esiste, eliminiamo dall'oggetto decoded issuedAt (iat) e expiredAt (exp)
                delete decoded.iat;
                delete decoded.exp;
                //Troviamo l'utente con i dati del payload
                const me = await User.findOne({...decoded});
                //Se l'utente è stato trovato
                if (me) {
                    req.user = me;
                    next();
                } else {
                    res.status(401).send("Utente non trovato");
                }
            } else {
                res.status(401).send("Rieffettua il login"); //Token non valido o scaduto
            }
        }

    } catch (err) {
        next(err);
    }
};