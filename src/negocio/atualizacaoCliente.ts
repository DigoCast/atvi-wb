import Entrada from "../io/entrada";
import Cliente from "../models/cliente";
import Atualizacao from "./atualizacao";

export default class AtualizacaoCliente extends Atualizacao {
  private clientes: Array<Cliente>;
  private entrada: Entrada;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  public atualizar(): void {
    console.log(
      `\n=================Inicio Atualização Cliente=================`
    );
    let cpf = this.entrada.receberTexto(
      `Insira o Cpf do Cliente a ser Atualizado: `
    );
    let cliente = this.clientes.find(
      (cliente) => cliente.getCPF.getValor == cpf
    );

    if (cliente) {
      let novoNome = this.entrada.receberTexto("Insira o novo Nome: ");
      let novoNomeSocial = this.entrada.receberTexto(
        "Insira o novo Nome Social: "
      );
      cliente.nome = novoNome;
      cliente.nomeSocial = novoNomeSocial;
      console.log(`O cliente ${cliente.nome} foi atualizado com sucesso!\n`);
    } else {
      console.log("Cliente não encontrado\n");
    }
  }
}
