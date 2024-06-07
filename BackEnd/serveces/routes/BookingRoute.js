import { Router } from "express";
import Booking from "../models/BookingModel.js";
import { authMiddleware } from "../authentication/auth.js";
import Service from "../models/ServicesModel.js";

export const bookingRoute = Router();

//Ricevo lista delle prenotazioni
bookingRoute.get("/list", async(req, res, next) => {
    try {
        let bookingList = await Booking.find().populate({
            path:"service",
            select: ["name", "description"]
        }).populate({
            path: "user",
            select: ["name", "lastName", "email"]
        });
        res.send(bookingList);
    } catch (error) {
        next(error);
    }
});

//Modifica prenotazione
bookingRoute.put("/:id", async (req, res, next) => {
    try {
        let booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(booking);
    } catch (error) {
        next(error);
    }
});

//Elimina prenotazione
bookingRoute.delete("/:id", async (req, res, next) => {
    try {
        await Booking.deleteOne({ _id: req.params.id });
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
});

//Aggiunta nuova prenotazione
bookingRoute.post("/newBooking/:id", authMiddleware, async (req, res, next) => {
    try {
        //Controllo che req.user sia preso da authMiddleware
        if (!req.user || !req.user._id) {
            return res.status(401).send({ error: "Utente non autenticato" });
        }

        // Trova il servizio tramite ID
        let service = await Service.findById(req.params.id);
        //console.log(req.params.id);
        if (!service) {
            return res.status(404).send({ error: "Servizio non trovato" });
        }

        // Creanuova prenotazione
        let newBooking = await Booking.create({
            ...req.body,
            user: req.user._id,
            service: service._id
        });

        res.status(201).send(newBooking);
    } catch(err) {
        next(err);
    }
});