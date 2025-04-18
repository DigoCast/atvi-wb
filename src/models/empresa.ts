import Cliente from "./cliente";
import Produto from "./produto";
import Servico from "./servico";
import { clientesPop, produtosPop, servicosPop } from "../scripts/popularDados"

class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
    }

    public popular():void{
        this.clientes.push(...clientesPop)
        this.produtos.push(...produtosPop)
        this.servicos.push(...servicosPop)
    }

    public get getClientes(){
        return this.clientes
    }

    public get getProdutos(){
        return this.produtos
    }

    public get getServicos(){
        return this.servicos
    }
}

export default Empresa