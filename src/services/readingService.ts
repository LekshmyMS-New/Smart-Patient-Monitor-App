import api from "./api";
import type{ Reading } from "../types";

export const getReadings = async (): Promise<Reading[]> => {
  const res = await api.get("/readings");
  return res.data;
};

export const createReading = async (reading: Omit<Reading, "id">) => {
  const res = await api.post("/readings", reading);
  return res.data;
};
