import express from "express";
import {
  createReserva,
  getReservas,
  updateReserva,
  deleteReserva,
} from "../controllers/reservaController";
import Reserva from "../models/Reserva";

const router = express.Router();

router.post("/", createReserva);
router.get("/", getReservas);
router.put("/:id", updateReserva);
router.delete("/:id", deleteReserva);
router.get("/horarios-livres", async (req, res) => {
  try {
    const mesas = await Reserva.distinct("numeroMesa"); // Busca todas as mesas únicas
    const horarioInicio = 12; // Horário de abertura
    const horarioFim = 22; // Horário de fechamento

    const resultados = await Promise.all(
      mesas.map(async (mesa) => {
        const horarios = [];
        for (let hora = horarioInicio; hora < horarioFim; hora++) {
          const inicio = new Date();
          inicio.setHours(hora, 0, 0, 0);

          const fim = new Date();
          fim.setHours(hora + 1, 0, 0, 0);

          const reservaExistente = await Reserva.findOne({
            numeroMesa: mesa,
            dataHoraReserva: { $gte: inicio, $lt: fim },
          });

          horarios.push({
            hora: `${hora}:00 - ${hora + 1}:00`,
            status: reservaExistente ? "Ocupado" : "Livre",
          });
        }

        return { mesa, horarios };
      })
    );

    res.status(200).json(resultados);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar horários livres." });
  }
});

export default router;
