import Entrada from "../io/entrada";
import Produto from "../models/produto";
import Exclusao from "./exclusao";

export default class ExclusaoProduto extends Exclusao{
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public excluir(): void {
        console.log(`\n=================Inicio Exclusão Produto=================`)
        let id = this.entrada.receberTexto(`Digite o ID do Produto a ser excluido: `)
        let index = this.produtos.findIndex(produto => produto.getId == id)

        if (index !== -1){
            this.produtos.splice(index, 1)
            console.log(`Produto com ID ${id} foi excluído com sucesso!\n`)
        }else{
            console.log(`Produto com ID ${id} não foi encotrado.\n`)
        }
    }
}