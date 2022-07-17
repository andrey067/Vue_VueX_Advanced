import { Lead } from "./Lead";
import { Servico } from "./Servico";

export interface Contrato {
    id: number;
    leadId: number;
    servicoId: number;
    data_inicio: string;
    data_fim: string;
    lead: Lead,
    servico: Servico
}