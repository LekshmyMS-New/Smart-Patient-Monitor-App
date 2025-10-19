// src/types/index.ts

export interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
}

export interface Device {
  id: string;
  name: string;
  type: string;
  status: string;
  patientId: string;
}

export interface Alert {
  id: string;
  message: string;
  severity: "low" | "medium" | "high";
  patientId: string;
  timestamp: string;
}

// ✅ Add this Reading type
export interface Reading {
  id: string;
  patientId: string;
  deviceId: string;
  type: string;       // e.g. "heart_rate", "bp", "oxygen"
  value: number;
  unit: string;       // e.g. "bpm", "mmHg", "%"
  timestamp: string;
}
