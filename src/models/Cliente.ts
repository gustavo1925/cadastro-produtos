
export class Cliente {

    private id: number;
    private nome: string;
    private CPF: string;
    private RG: string;
    private dtNascimento: Date;

    constructor(
        id: number,
        nome: string,
        CPF: string,
        RG: string,
        dtNascimento: Date
    ) {
        this.id = id;
        this.nome = nome;
        this.CPF = CPF;
        this.RG = RG;
        this.dtNascimento = dtNascimento;
    }

    getCPF(): string {
        return this.CPF;
    }

    getNome(): string {
        return this.nome;
    }

    getRG(): string {
        return this.RG;
    }

    getDtNascimento(): Date {
        return this.dtNascimento;
    }

    getIdade(): number {
        const anoAtual = new Date().getFullYear();
        const anoNascimento = this.dtNascimento.getFullYear();

        return anoAtual - anoNascimento;
    }
}
