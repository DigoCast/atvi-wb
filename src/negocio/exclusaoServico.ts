import Entrada from "../io/entrada";
import Servico from "../models/servico";
import Exclusao from "./exclusao";

export default class ExclusaoServico extends Exclusao{
    private servicos: Array<Servico>
    private entrada:  Entrada

    constructor(servico: Array<Servico>){
        super()
        this.servicos = servico
        this.entrada = new Entrada()
    }

    public excluir(): void {
        console.log(`\n=================Inicio Exclusão Servicos=================`)
        let id = this.entrada.receberTexto(`Digite o ID do Serviço a ser excluido: `)
        let index = this.servicos.findIndex(servico => servico.getId == id)

        if(index !== -1){
            this.servicos.splice(index, 1)
            console.log(`Servido de ID: ${id} foi excluido com sucesso`)
        }else{
            console.log(`Servido de ID: ${id} não foi encontrado`)
        }
    }
}