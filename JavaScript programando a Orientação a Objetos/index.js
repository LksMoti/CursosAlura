import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaPoupança } from "./Contas/ContaPoupança.js";
import { Conta } from "./Contas/Conta.js";

//Cliente 1
const cliente1 = new Cliente('Lucas', 52844688802);
// CONTA CORRENTE CLIENTE 2
const contaCorrenteLucas = new ContaCorrente(0, cliente1, 1001);
contaCorrenteLucas.depositar(1000);
const contaPoupançaLucas = new ContaPoupança(50, cliente1, 1001)


//Acões 
console.log(contaPoupançaLucas)
console.log(contaCorrenteLucas);
console.log(ContaCorrente.numeroDeContas);