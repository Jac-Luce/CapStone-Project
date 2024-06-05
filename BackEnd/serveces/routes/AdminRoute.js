import { Router } from "express";
import User from "../models/UserModel.js";
import Booking from "../models/BookingModel.js";

export const adminRoute = Router();

//Creo paginazione e ricevo lista degli user
adminRoute.get("/", async(req, res, next) => {
    try {
        const page = req.query.page || 1;

        let userList = await User.find().limit(10).skip(10 * (page - 1));
        res.send(userList);
    } catch (error) {
        next(error);
    }
});

//Ricevo specifico user tramite id
adminRoute.get("/:id", async (req, res, next) => {
    try {
        let user = await User.findById(req.params._id);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

//Ricevo tutte le prenotazioni di uno specifico user
adminRoute.get("/:id/booking", async (req, res, next) => {
    try {
        let user = await Booking.find({
            user: req.params._id
        }).populate({
            path: "user",
            select: ["name", "lastName", "email"]
        });
        res.send(user);
    } catch (error) {
        next(error);
    }
});

//Modifica user
adminRoute.put("/:id", async(req, res, next) => {
    try {
        let user = await User.findByIdAndUpdate(req.params._id, req.body, { new: true });
        res.send(user);
    } catch (error) {
        next(error);
    }
});

//Elimina user
adminRoute.delete("/:id", async(req, res, next) => {
    try {
        await User.deleteOne({ _id: req.params._id });
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
});
/*
//Aggiunta nuovo user
adminRoute.post("/register", async(req, res, next) => {
    try {
        let user = await User.create(req.body);
        res.send(user).status(400);
    } catch (error) {
        next(error);
    }
}); */