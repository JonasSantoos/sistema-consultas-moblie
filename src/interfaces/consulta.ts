import { Medico } from "./medico";

// src/interfaces/consulta.ts
export interface Consulta {
  id: number;
  medico: Medico;
  paciente: Paciente;
  data: Date;
  valor: number;
  status: "agendada" | "confirmada" | "cancelada";
  observacoes: string;
}

// src/types/paciente.ts  
export type Paciente = {
  nome: string;
  cpf: string;
};