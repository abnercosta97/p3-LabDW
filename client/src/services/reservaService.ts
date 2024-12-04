import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3020/api/reservas" });

export const getReservas = () => api.get("/");
export const createReserva = (data: any) => api.post("/", data);
export const updateReserva = (id: string, data: any) => api.put(`/${id}`, data);
export const deleteReserva = (id: string) => api.delete(`/${id}`);
export const getReservasLivres = () => api.get("/horarios-livres");
