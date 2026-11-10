
import { Cliente } from "./models/Cliente.js";

function criarData(data: string): Date {
    const [dia, mes, ano] = data.split("/").map(Number);

    return new Date(ano, mes - 1, dia);
}

const cliente1 = new Cliente(
    1,
    "André Solicito",
    "068.753.540-98",
    "41.068.896-4",
    criarData("23/05/1980")
);

const cliente2 = new Cliente(
    2,
    "Janete de Oliveira",
    "501.764.310-98",
    "20.360.374-6",
    criarData("12/01/1970")
);

const cliente3 = new Cliente(
    3,
    "José de Almeida",
    "862.373.890-08",
    "42.172.423-7",
    criarData("13/07/1965")
);


const clientes = [cliente1, cliente2, cliente3];

clientes.forEach((cliente) => {

    console.log("--------------------------------");
    console.log("ID:", cliente === cliente1 ? 1 :
        cliente === cliente2 ? 2 : 3);

    console.log("Nome:", cliente.getNome());
    console.log("CPF:", cliente.getCPF());
    console.log("RG:", cliente.getRG());

    console.log(
        "Data de nascimento:",
        cliente.getDtNascimento().toLocaleDateString("pt-BR")
    );

    console.log("Idade:", cliente.getIdade(), "anos");

});


