import mongoose, { Document, Schema } from "mongoose";

export interface IReserva extends Document {
  nomeCliente: string;
  numeroMesa: number;
  dataHoraReserva: Date;
  status: "reservado" | "ocupado" | "disponível";
  contatoCliente: string;
}

const ReservaSchema: Schema = new Schema({
  nomeCliente: { type: String, required: true },
  numeroMesa: { type: Number, required: true },
  dataHoraReserva: { type: Date, required: true },
  status: {
    type: String,
    enum: ["reservado", "ocupado", "disponível"],
    default: "reservado",
  },
  contatoCliente: { type: String, required: true },
});

export default mongoose.model<IReserva>("Reserva", ReservaSchema);
