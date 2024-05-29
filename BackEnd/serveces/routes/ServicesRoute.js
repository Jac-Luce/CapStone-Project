import { Router } from "express";
import Service from "../models/ServicesModel.js";

export const serviceRoute = Router();

//Creo lista dei servizi
serviceRoute.get("/list", async(req, res, next) => {
    try {
        
        let servicesList = await Service.find();
        res.send(servicesList);
    } catch (error) {
        next(error);
    }
});

//Modifica servizio
serviceRoute.put("/:id", async(req, res, next) => {
    try {
        let service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(service);
    } catch (error) {
        next(error);
    }
});

//Elimina servizio
serviceRoute.delete("/:id", async(req, res, next) => {
    try {
        await Service.deleteOne({ _id: req.params.id });
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
});

//Aggiunta nuovo servizio
serviceRoute.post("/", async(req, res, next) => {
    try {
        let newService = await Service.create(req.body);
        res.send(newService).status(400);
    } catch (error) {
        next(error);
    }
});