import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Paper,
  Chip,
} from "@mui/material";
import { toast } from "react-toastify";
import { getReservasLivres } from "../services/reservaService";

interface Horario {
  hora: string;
  status: "Livre" | "Ocupado";
}

interface MesaHorarios {
  mesa: number;
  horarios: Horario[];
}

const HorariosLivres: React.FC = () => {
  const [mesasHorarios, setMesasHorarios] = useState<MesaHorarios[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchHorariosLivres = async () => {
    try {
      const response = await getReservasLivres();
      setMesasHorarios(response.data);
      setLoading(false);
    } catch (error) {
      toast.error("Erro ao carregar horários livres.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHorariosLivres();
  }, []);

  return (
    <Container>
      <Box my={4} sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Horários por Mesa
        </Typography>
      </Box>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
          }}
        >
          {mesasHorarios.map((item) => (
            <Paper
              key={item.mesa}
              elevation={3}
              sx={{
                width: "100%",
                maxWidth: "500px",
                padding: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                Mesa {item.mesa}
              </Typography>
              <List>
                {item.horarios.map((horario, index) => (
                  <ListItem key={index} sx={{ textAlign: "center" }}>
                    <ListItemText primary={horario.hora} />
                    <Chip
                      label={horario.status}
                      color={horario.status === "Ocupado" ? "error" : "success"}
                      sx={{ ml: 2 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default HorariosLivres;
