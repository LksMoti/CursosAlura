import { Funcionarios } from "./Funcionarios.js";

export class Gerente extends Funcionarios {
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf);

        this._bonificaçao = 1.1;
    }
}