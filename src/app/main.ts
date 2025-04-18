import Entrada from "../io/entrada"
import Empresa from "../models/empresa"
import AtualizacaoCliente from "../negocio/atualizacaoCliente"
import AtualizacaoProduto from "../negocio/atualizacaoProduto"
import AtualizacaoServico from "../negocio/atualizacaoServico"
import CadastroCliente from "../negocio/cadastroCliente"
import CadastroProduto from "../negocio/cadastroProduto"
import CadastroServico from "../negocio/cadastroServico"
import Consumo from "../negocio/consumo"
import ExclusaoCliente from "../negocio/exclusaoCliente"
import ExclusaoProduto from "../negocio/exclusaoProduto"
import ExclusaoServico from "../negocio/exclusaoServico"
import ListagemCliente from "../negocio/listagemCliente"
import ListagemProduto from "../negocio/listagemProduto"
import ListagemServico from "../negocio/listagemServicos"
import ListagensFuncionalidades from "../negocio/listagemFuncionalidade"

console.log('==================Seja Bem-Vindo à World Beauty=====================')
let empresa = new Empresa
let execucao = true

while(execucao){
    console.log('\n============Menu============')
    console.log('1 - Clientes')
    console.log('2 - Produtos')
    console.log('3 - Serviços')
    console.log('4 - Listagens')
    console.log('5 - Consumo')
    console.log('6 - Popular Dados')
    console.log('0 - Sair\n')

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Ecolha uma opção: `)

    switch(opcao){
        case 1: 
            console.log(`\n============Clientes============`)
            console.log('1 - Cadastrar')
            console.log('2 - Atualizar')
            console.log('3 - Excluir')
            console.log('4 - Listar todos os Clientes')
            console.log('0 - Voltar ao Menu\n')
            
            let opcaoCli = entrada.receberNumero('Escolha uma opção: ')

            switch(opcaoCli){
                case 1: 
                    let cadastroCliente = new CadastroCliente(empresa.getClientes)
                    cadastroCliente.cadastrar()
                    break
                case 2: 
                    let atualizarCliente = new AtualizacaoCliente(empresa.getClientes)
                    atualizarCliente.atualizar()
                    break
                case 3:
                    let exclusaoCliente = new ExclusaoCliente(empresa.getClientes)
                    exclusaoCliente.excluir()
                    break
                case 4:
                    let listagemCliente = new ListagemCliente(empresa.getClientes) 
                    listagemCliente.listar()
                    break
                case 0:
                    break
                default:
                    console.log(`Opção (${opcaoCli}) não entendida :c`)
            }
            break
        case 2:
            console.log(`\n============Produtos============`)
            console.log('1 - Cadastrar')
            console.log('2 - Atualizar')
            console.log('3 - Excluir')
            console.log('4 - Listar todos os Produtos')
            console.log('0 - Voltar ao Menu\n')
            
            let opcaoProd = entrada.receberNumero('Escolha uma opção: ')

            switch(opcaoProd){
                case 1:
                    let cadastroProduto = new CadastroProduto(empresa.getProdutos)
                    cadastroProduto.cadastrar()
                    break
                case 2:
                    let atualizarProduto = new AtualizacaoProduto(empresa.getProdutos)
                    atualizarProduto.atualizar()
                    break
                case 3:
                    let exclusaoProduto = new ExclusaoProduto(empresa.getProdutos)
                    exclusaoProduto.excluir()
                    break
                case 4: 
                    let listagemProduto = new ListagemProduto(empresa.getProdutos)
                    listagemProduto.listar()
                    break
                case 0:
                    break
                default:
                    console.log(`Opção (${opcaoProd}) não entendida :c`)
            }
            break
        case 3:
            console.log(`\n============Serviços============`)
            console.log('1 - Cadastrar')
            console.log('2 - Atualizar')
            console.log('3 - Excluir')
            console.log('4 - Listar todos os Serviços')
            console.log('0 - Voltar ao Menu\n')

            let opcaoServ = entrada.receberNumero('Escolha uma opção: ')

            switch(opcaoServ){
                case 1:
                    let cadastroServico = new CadastroServico(empresa.getServicos)
                    cadastroServico.cadastrar()
                    break
                case 2:
                    let atualizarServico =  new AtualizacaoServico(empresa.getServicos)
                    atualizarServico.atualizar()
                    break
                case 3:
                    let exclusaoServico = new ExclusaoServico(empresa.getServicos)
                    exclusaoServico.excluir()
                    break
                case 4:
                    let listagemServico = new ListagemServico(empresa.getServicos)
                    listagemServico.listar()
                    break
                case 0: 
                    break
                default:
                    console.log(`Opção (${opcaoServ}) não entendida :c`)    
            }
            break
        case 4:
            console.log(`\n============Listagens============`)
            console.log('1 - Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade')
            console.log('2 - Listagem de todos os clientes por gênero')
            console.log('3 - Listagem geral dos serviços ou produtos mais consumidos')
            console.log('4 - Listagem dos serviços ou produtos mais consumidos por gênero')
            console.log('5 - Listagem dos 10 clientes que menos consumiram produtos ou serviços')
            console.log('6 - Listagem dos 5 clientes que mais consumiram em valor')
            console.log('0 - Voltar ao Menu\n')

            let opcaoListagem = entrada.receberNumero('Insira sua opção de listagem: ')
            let listagensFuncionalidades = new ListagensFuncionalidades(empresa.getClientes, empresa.getProdutos, empresa.getServicos)

            switch(opcaoListagem){
                case 1:
                    listagensFuncionalidades.listagem10ConsumoQnt()
                    break
                case 2:
                    listagensFuncionalidades.listagemGenero()
                    break
                case 3:
                    listagensFuncionalidades.listagemMaisConsumidos()
                    break
                case 4:
                    listagensFuncionalidades.listagemConsumoGenero()
                    break
                case 5:
                    listagensFuncionalidades.listagem10MenosConsumoQnt()
                    break
                case 6:
                    listagensFuncionalidades.listagem5ConsumoValor()
                    break
                case 0:
                    break
                default:
                    console.log(`Opção (${opcaoListagem}) não entendida :c`)  
            }

            break
        case 5:
            let consumo = new Consumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            consumo.consumir()
            break
        case 6:
            empresa.popular()
            console.log('Dados de Cliente, Produto e Servicos adiconados com Sucesso!')
            break
        case 0: 
            execucao = false
            console.log('Até a próxima!')
            break
        default:
            console.log(`Opção (${opcao}) não entendida :c`)
    }
}