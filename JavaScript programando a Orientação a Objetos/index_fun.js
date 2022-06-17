import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionários/Gerente.js";
import { Diretor } from "./Funcionários/Diretor.js";
import { SistemaAutenticaçao } from "./SistemaDeAutenticação.js";


const diretor = new Diretor("Ricardo", 10000, 12345678001);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Anderson", 5000, 27713396845);
gerente.cadastrarSenha("xxxx")
console.log(diretor, gerente);
const cliente = new Cliente("lais", 12345678919, "rrr")
const clienteLogado = SistemaAutenticaçao.login(cliente, "rrr")

const diretorEstaLogado = SistemaAutenticaçao.login(diretor, "123456");
const gerenteLogado = SistemaAutenticaçao.login(gerente, "kkk")


console.log(diretorEstaLogado, gerenteLogado, clienteLogado);