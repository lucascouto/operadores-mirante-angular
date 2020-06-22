import { Timestamp } from 'rxjs';

export interface Operador {
    id: number;
    nome: string;
    login: string;
    senha: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}