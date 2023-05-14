// Você pode criar uma classe chamada ListaDeCompras para resolver este desafio.

// *  1. Comece definindo a classe ListaDeCompras e inicialize duas listas vazias, itens e quantidades, para armazenar os nomes dos produtos e as quantidades, respectivamente;

class ListaDeCompras {
  constructor() {
    this.itens = [];
    this.quantidades = [];
  }
  
  //  * 2. Crie o método adicionar_item, que recebe como argumentos o nome do produto e a quantidade desejada. Dentro desse método, adicione o nome do produto à lista itens e a quantidade à lista quantidades;

  adicionarItem(item, quantidade) {
    this.itens.push(item);
    this.quantidades.push(quantidade);
  }

  // * 3. Crie o método remover_item, que recebe como argumento o nome do produto a ser removido. Dentro desse método, encontre o índice do produto na lista items e remova o produto tanto da lista itens quanto da lista quantidades;

  removerItem(item) {
    const index = this.itens.indexOf(item);
    console.log(index);
    this.itens.splice(index, 1);
    this.quantidades.splice(index, 1);
  }
 // * 4. Crie o método listar_itens, que percorre a lista itens e a lista quantidades simultaneamente e exibe o nome do produto e a quantidade em um formato legível;

  listarItens() {
    const tabela = [];
    for (let i = 0; i < this.itens.length; i++) {
      tabela.push({ Produto: this.itens[i], Quantidade: this.quantidades[i] });
    }
    console.log(tabela);
    console.table(tabela);
  }

}

// * 3. Teste a sua implementação criando uma instância da classe ListaDeCompras, adicionando alguns itens, removendo um item e listando todos os itens restantes;

const lista = new ListaDeCompras();

lista.adicionarItem('Arroz', 1);
lista.adicionarItem('Feijão', 2);
lista.adicionarItem('Macarrão', 3);

console.log(lista)

lista.removerItem('Feijão');

console.log(lista)

lista.listarItens();









