class Produto {
    constructor(id, titulo, descricao, preco, caminhoImagem, codigo, estoque) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.preco = preco;
        this.caminhoImagem = caminhoImagem;
        this.codigo = codigo;
        this.estoque = estoque;
    }
}

class GerenciadorProdutos {
    constructor() {
        this.produtos = []; // dados do produto
        this.ultimoId = 0; // id's
    }

    // cadastro

    adicionarProduto(titulo, descricao, preco, caminhoImagem, codigo, estoque) {
        if (!titulo || !descricao || !preco || !caminhoImagem || !codigo || !estoque) {
            console.error("Todos os campos são obrigatórios.");
            return;
        }

        if (this.produtos.some(produto => produto.codigo === codigo)) {
            console.error("O código já existe. Escolha outro código.");
            return;
        }

        const id = ++this.ultimoId;
        const novoProduto = new Produto(id, titulo, descricao, preco, caminhoImagem, codigo, estoque);
        this.produtos.push(novoProduto);
        console.log("Produto adicionado com sucesso:", novoProduto);
    }

    // buscador

    obterProdutoPorId(id) {
        const produto = this.produtos.find(produto => produto.id === id);
        if (!produto) {
            console.error("Produto não encontrado.");
            return null;
        }
        return produto;
    }
}


// aplicando:

const gerenciador = new GerenciadorProdutos();

gerenciador.adicionarProduto("Produto 1", "Descrição 1", 10, "link.jpg", "P1", 100);
gerenciador.adicionarProduto("Produto 2", "Descrição 2", 20, "link.jpg", "P2", 50);

console.log(gerenciador.obterProdutoPorId(3)); 
console.log(gerenciador.obterProdutoPorId(3)); 
