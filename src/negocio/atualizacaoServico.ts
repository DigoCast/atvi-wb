import Entrada from "../io/entrada";
import Servico from "../models/servico";
import Atualizacao from "./atualizacao";

export default class AtualizacaoServico extends Atualizacao {
  private servicos: Array<Servico>;
  private entrada: Entrada;

  constructor(servicos: Array<Servico>) {
    super();
    this.servicos = servicos;
    this.entrada = new Entrada();
  }

  public atualizar(): void {
    console.log(
      `\n=================Inicio Atualização Serviço=================`
    );
    let id = this.entrada.receberTexto(
      "Insira o ID do Serviço a ser Atualizado: "
    );
    let servico = this.servicos.find((servico) => servico.getId == id);

    if (servico) {
      let novoNome = this.entrada.receberTexto("Insira novo Nome do Serviço: ");
      let novoPreco = this.entrada.receberTexto(
        "Insira novo Preco do Servico: "
      );
      servico.nome = novoNome;
      servico.preco = novoPreco;
      console.log(`O Servico ${servico.nome} foi atualizado com sucesso!\n`);
    } else {
      console.log(`Servico de ID ${id} não encontrado`);
    }
  }
}
