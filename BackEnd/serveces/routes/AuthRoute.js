import { Router } from "express";
import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import { authMiddleware, generateJWT } from "../authentication/auth.js";
import passport from "passport";
import { config } from "dotenv";

config();

export const authRoute = Router();

//Registrazione utente
authRoute.post('/signIn', async(req, res, next) => {
    try {
        let user = await User.create({
            ...req.body,
            password: await bcrypt.hash(req.body.password, 10)
        });
        res.send(user);
    } catch (error) {
        next(error);
    }
});

//Login utente
authRoute.post('/login', async(req, res, next) => {
    try {
        let userFound = await User.findOne({
            email: req.body.email
        });

        if(userFound) {
            const passwordIsOk = await bcrypt.compare(req.body.password, userFound.password);
            //Se la password coincide
            if(passwordIsOk) {
                //Genera token
                const token = await generateJWT({
                    _id: userFound._id
                });
                res.send({user: userFound, token: token});
            } else {
                res.status(400).send("Password errata");
            }
        } else {
            res.status(400).send("Utente non trovato");
        }
    } catch (error) {
        next(error);
    }
});

//Login utente admin
authRoute.post('/adminLogin', async(req, res, next) => {
    try {
        let userFound = await User.findOne({
            email: req.body.email
        });

        if(userFound.email === "jajy92@hotmail.it") {
            const passwordIsOk = await bcrypt.compare(req.body.password, userFound.password);
            //Se la password coincide
            if(passwordIsOk) {
                //Genera token
                const token = await generateJWT({
                    _id: userFound._id
                });
                res.send({user: userFound, token: token});
            } else {
                res.status(400).send("Password errata");
            }
        } else {
            res.status(400).send("Utente non autorizzato");
        }
    } catch (error) {
        next(error);
    }
});

//Autenticazione necessaria per visualizzare il profilo utente
authRoute.get('/profile', authMiddleware, async(req, res, next) => {
    try {
        let user = await User.findById(req.user._id);
        res.send(user);
    } catch (error) {
        next(error);
    }
});