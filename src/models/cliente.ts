import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

class Cliente{
    public nome: string
    public nomeSocial: string
    public genero: string
    private cpf: CPF
    private rg: RG
    private dataCadastro: Date
    private telefone: Telefone
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>

    constructor(nome: string, nomeSocial: string, genero: string, cpf: CPF, rg: RG, telefone: Telefone, dataCadastro: Date){
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.genero = genero
        this.cpf = cpf
        this.rg = rg
        this.telefone = telefone
        this.dataCadastro = dataCadastro
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }

    public get getCPF(){
        return this.cpf
    }
    
    public get getRG(){
        return this.rg
    }

    public get getDataCadastro(){
        return this.dataCadastro
    }

    public get getDDD(){
        return this.telefone.getDDD
    }

    public get getTelefone(){
        return this.telefone.toString
    }

    public get getProdutosConsumidos(): Array<Produto>{
        return this.produtosConsumidos
    }

    public get getServicosConsumidos(): Array<Servico>{
        return this.servicosConsumidos
    }
    
    public consumirProduto(produto: Produto){
        this.produtosConsumidos.push(produto)
    }

    public consumirServico(servico: Servico){
        this.servicosConsumidos.push(servico)
    }
}

export default Cliente