import { Router } from "express";
import Booking from "../models/BookingModel.js";
import User from "../models/UserModel.js";
import Service from "../models/ServicesModel.js";

export const bookingRoute = Router();

//Ricevo lista delle prenotazioni
bookingRoute.get("/list", async(req, res, next) => {
    try {
        let bookingList = await Booking.find();
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
bookingRoute.post("/newBooking/:id", async (req, res, next) => {
    try {
        let user = await User.findById(req.params.id);

        let service = await Service.findById(req.params.id);

        let newBooking = await Booking.create({...req.body, userName: user, serviceName: service._id});

        user.booking.push(newBooking._id);

        await user.save();
        
        res.send(newBooking).status(400);
    } catch (error) {
        next(error);
    }
});