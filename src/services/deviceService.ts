import api from "./api";
import type{ Device } from "../types";

export const getDevices = async (): Promise<Device[]> => {
  const res = await api.get("/devices");
  return res.data;
};

export const getDeviceById = async (id: number): Promise<Device> => {
  const res = await api.get(`/devices/${id}`);
  return res.data;
};

export const createDevice = async (device: Omit<Device, "id">) => {
  const res = await api.post("/devices", device);
  return res.data;
};

export const updateDevice = async (id: number, device: Partial<Device>) => {
  const res = await api.put(`/devices/${id}`, device);
  return res.data;
};

export const deleteDevice = async (id: number) => {
  const res = await api.delete(`/devices/${id}`);
  return res.data;
};
