export interface Telefone {
    id: number;
    ddd: string;
    numero: string;
    tipo: string;
    loginOperador: string;
}

export interface Pessoa {
    id: number;
    nome: string;
    documento: string;
    dataNascimento: string;
    nomePai: string;
    nomeMae: string;
    loginOperador: string;
    tipoPessoa: string;
    telefones: Telefone[];
}
