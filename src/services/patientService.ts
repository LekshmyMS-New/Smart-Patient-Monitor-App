import api from "./api";
import type{ Patient } from "../types";

export const getPatients = async (): Promise<Patient[]> => {
  const res = await api.get("/patients");
  return res.data;
};

export const getPatientById = async (id: number): Promise<Patient> => {
  const res = await api.get(`/patients/${id}`);
  return res.data;
};

export const createPatient = async (patient: Omit<Patient, "id">) => {
  const res = await api.post("/patients", patient);
  return res.data;
};

export const updatePatient = async (id: number, patient: Partial<Patient>) => {
  const res = await api.put(`/patients/${id}`, patient);
  return res.data;
};

export const deletePatient = async (id: number) => {
  const res = await api.delete(`/patients/${id}`);
  return res.data;
};
