import { Request, Response } from "express";
import Reserva from "../models/Reserva";

export const createReserva = async (req: Request, res: Response) => {
  try {
    const reserva = new Reserva(req.body);
    const savedReserva = await reserva.save();
    res.status(201).json(savedReserva);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getReservas = async (req: Request, res: Response) => {
  try {
    const reservas = await Reserva.find();
    res.json(reservas);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateReserva = async (req: Request, res: Response) => {
  try {
    const updatedReserva = await Reserva.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedReserva);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteReserva = async (req: Request, res: Response) => {
  try {
    await Reserva.findByIdAndDelete(req.params.id);
    res.json({ message: "Reserva removida com sucesso!" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
