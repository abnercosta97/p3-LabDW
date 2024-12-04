import React, { useState } from "react";
import { createReserva, updateReserva } from "../services/reservaService";
import { TextField, Button, Box, Typography } from "@mui/material";
import { toast } from "react-toastify";

interface Reserva {
  _id?: string;
  nomeCliente: string;
  numeroMesa: number;
  dataHoraReserva: string;
  status: string;
  contatoCliente: string;
}

interface ReservaFormProps {
  reserva?: Reserva | null;
  onSubmit: () => void;
  onCancel: () => void;
}

const ReservaForm: React.FC<ReservaFormProps> = ({
  reserva,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Reserva>(
    reserva || {
      nomeCliente: "",
      numeroMesa: 0,
      dataHoraReserva: "",
      status: "reservado",
      contatoCliente: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (formData._id) {
        await updateReserva(formData._id, formData);
        toast.success("Reserva atualizada com sucesso!");
      } else {
        await createReserva(formData);
        toast.success("Reserva criada com sucesso!");
      }
      onSubmit();
    } catch (error) {
      toast.error("Erro ao salvar reserva.");
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {formData._id ? "Editar Reserva" : "Nova Reserva"}
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Nome do Cliente"
        name="nomeCliente"
        value={formData.nomeCliente}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Número da Mesa"
        name="numeroMesa"
        type="number"
        value={formData.numeroMesa}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Data e Hora da Reserva"
        name="dataHoraReserva"
        type="datetime-local"
        value={formData.dataHoraReserva}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Contato do Cliente"
        name="contatoCliente"
        value={formData.contatoCliente}
        onChange={handleChange}
      />
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mr: 2 }}
        >
          Salvar
        </Button>
        <Button variant="outlined" color="secondary" onClick={onCancel}>
          Cancelar
        </Button>
      </Box>
    </Box>
  );
};

export default ReservaForm;
