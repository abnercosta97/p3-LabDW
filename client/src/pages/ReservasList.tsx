import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReservas, deleteReserva } from "../services/reservaService";
import { toast } from "react-toastify";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Typography,
  Box,
  Modal,
} from "@mui/material";
import ReservaForm from "../components/ReservaForm"; // Importação do formulário

interface Reserva {
  _id?: string;
  nomeCliente: string;
  numeroMesa: number;
  dataHoraReserva: string;
  status: string;
  contatoCliente: string;
}

const ReservasList: React.FC = () => {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedReserva, setSelectedReserva] = useState<Reserva | null>(null);

  const fetchReservas = async () => {
    try {
      const response = await getReservas();
      setReservas(response.data);
    } catch (error) {
      toast.error("Erro ao carregar reservas!");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteReserva(id);
      toast.success("Reserva removida com sucesso!");
      fetchReservas();
    } catch (error) {
      toast.error("Erro ao remover a reserva.");
    }
  };

  const handleOpenModal = (reserva?: Reserva) => {
    setSelectedReserva(reserva || null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedReserva(null);
  };

  const handleFormSubmit = () => {
    fetchReservas(); // Atualiza a lista após criar ou editar
    handleCloseModal();
  };

  useEffect(() => {
    fetchReservas();
  }, []);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Lista de Reservas
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpenModal()}
        >
          Nova Reserva
        </Button>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="outlined" component={Link} to="/horarios-livres">
            Ver Horários Livres
          </Button>
        </Box>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome do Cliente</TableCell>
            <TableCell>Número da Mesa</TableCell>
            <TableCell>Data e Hora</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservas.map((reserva) => (
            <TableRow key={reserva._id}>
              <TableCell>{reserva.nomeCliente}</TableCell>
              <TableCell>{reserva.numeroMesa}</TableCell>
              <TableCell>
                {new Date(reserva.dataHoraReserva).toLocaleString()}
              </TableCell>
              <TableCell>{reserva.status}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "8px" }}
                  onClick={() => handleOpenModal(reserva)}
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(reserva._id!)}
                >
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal para Formulário */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 4,
            boxShadow: 24,
            borderRadius: 1,
          }}
        >
          <ReservaForm
            reserva={selectedReserva}
            onSubmit={handleFormSubmit}
            onCancel={handleCloseModal}
          />
        </Box>
      </Modal>
    </Container>
  );
};

export default ReservasList;
