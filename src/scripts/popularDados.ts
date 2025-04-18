import Cliente from "../models/cliente";
import Produto from "../models/produto";
import Servico from "../models/servico";
import CPF from "../models/cpf";
import RG from "../models/rg";
import Telefone from "../models/telefone";

const clientesPop: Cliente[] = [];
const produtosPop: Produto[] = [];
const servicosPop: Servico[] = [];

for (let i = 1; i <= 30; i++) {
    const nome = `Cliente ${i}`;
    const nomeSocial = `Cliente Social ${i}`;
    const genero = i % 2 === 0 ? "F" : "M";
    const cpfNumero = Math.floor(Math.random() * 900) + 100;
    const cpf = new CPF(`${cpfNumero}`, new Date(1990, 0, i));
    const rg = new RG(`00.000.00${i}`, new Date(2005, 0, i));
    const telefone = new Telefone("11", `9${Math.floor(10000000 + i * 1234)}`);
    const dataCadastro = new Date();

    clientesPop.push(new Cliente(nome, nomeSocial, genero, cpf, rg, telefone, dataCadastro));
}

const nomesProdutos = [
    "Creme Hidratante Facial",
    "Sérum Anti-Idade",
    "Máscara de Argila",
    "Óleo Corporal Relaxante",
    "Esfoliante Corporal",
    "Protetor Solar FPS 50",
    "Shampoo Antiqueda",
    "Condicionador Hidratante",
    "Sabonete Facial Detox",
    "Tônico Facial Revitalizante",
    "Batom Matte Nude",
    "Base Líquida HD",
    "Paleta de Sombras Natural",
    "Iluminador em Pó",
    "Fixador de Maquiagem",
    "Demaquilante Bifásico",
    "Creme para Mãos e Unhas",
    "Óleo Essencial de Lavanda",
    "Spray Capilar Brilho Intenso",
    "Ampola de Reconstrução Capilar"
];

nomesProdutos.forEach((nome, index) => {
    const id = `P${index + 1}`;
    const preco = (25 + index * 3).toFixed(2);
    produtosPop.push(new Produto(id, nome, preco));
});

const nomesServicos = [
    "Limpeza de Pele Profunda",
    "Massagem Relaxante",
    "Tratamento Capilar Nutritivo",
    "Design de Sobrancelha",
    "Depilação a Laser",
    "Drenagem Linfática",
    "Peeling de Diamante",
    "Hidratação Facial",
    "Terapia com Aromas",
    "Revitalização Corporal"
];

nomesServicos.forEach((nome, index) => {
    const id = `S${index + 1}`;
    const preco = (60 + index * 5).toFixed(2);
    servicosPop.push(new Servico(id, nome, preco));
});

export { clientesPop, produtosPop, servicosPop };
