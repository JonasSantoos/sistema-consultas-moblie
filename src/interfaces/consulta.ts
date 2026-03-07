import { Medico } from "./medico";

// src/interfaces/consulta.ts
export interface Consulta {
  id: string;
  data: Date;
  medico: Medico;   // ← usado em vários lugares
  paciente: Paciente; // ← usado em vários lugares
}

// src/types/paciente.ts  
export type Paciente = {
  nome: string;
  cpf: string;
};