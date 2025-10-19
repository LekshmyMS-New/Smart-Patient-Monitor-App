import api from "./api";
import type{ Alert } from "../types";

export const getAlerts = async (): Promise<Alert[]> => {
  const res = await api.get("/alerts");
  return res.data;
};

export const createAlert = async (alert: Omit<Alert, "id">) => {
  const res = await api.post("/alerts", alert);
  return res.data;
};

export const deleteAlert = async (id: number) => {
  const res = await api.delete(`/alerts/${id}`);
  return res.data;
};
