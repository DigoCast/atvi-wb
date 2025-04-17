import Entrada from "../io/entrada";
import Produto from "../models/produto";
import Atualizacao from "./atualizacao";

export default class AtualizacaoProduto extends Atualizacao {
  private produtos: Array<Produto>;
  private entrada: Entrada;

  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
    this.entrada = new Entrada();
  }

  public atualizar(): void {
    console.log(
      `\n=================Inicio Atualização Produto=================`
    );
    let id = this.entrada.receberTexto(
      "Insira o ID do Produto a ser Atualizado: "
    );
    let produto = this.produtos.find((produto) => produto.getId == id);

    if (produto) {
      let novoNome = this.entrada.receberTexto(
        "Insira o novo Nome do Produto: "
      );
      let novoPreco = this.entrada.receberTexto(
        "Insira o novo Preco do Produto: "
      );
      produto.nome = novoNome;
      produto.preco = novoPreco;
      console.log(`O Produto ${produto.nome} foi atualizado com sucesso!\n`);
    } else {
      console.log(`O Produto ${id} não foi encontrado\n`);
    }
  }
}
