// Você pode criar uma classe chamada Paciente (representando um único nó) e outra classe chamada ListaDePacientes (representando a lista) para resolver este desafio.

// * 1.Crie a estrutura do nó: o nó deve ter os campos necessários para armazenar as informações de cada paciente, bem como um ponteiro para o próximo nó (paciente) na lista;

class Paciente {
  constructor(nome, idade, peso, altura) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.proximo = null;
  }
}

class ListaDePacientes {
  constructor() {
    this.primeiro = null;
}
// * 2.Crie a estrutura da lista de pacientes e escreva funções para adicionar e remover pacientes: estas funções devem criar ou excluir um nó da lista encadeada e ajustar os ponteiros corretamente;



  adicionarPaciente(nome, idade, peso, altura) {
    const novopaciente = new Paciente(nome, idade, peso, altura);
    if (this.primeiro === null) {
      this.primeiro = novopaciente;
    } else {
      let atual = this.primeiro;
      while (atual.proximo !== null) {
        atual = atual.proximo;
      }
      atual.proximo = novopaciente;
    }
  }

  removerPaciente(nome) {
   if (this.primeiro === null) {
     return null;
   }
    if (this.primeiro.nome === nome) {
      this.primeiro = this.primeiro.proximo;
      return;
    }
    let atual = this.primeiro;
    let anterior = null; 
    while (atual !== null) {
      if (atual.nome === nome) {
        anterior.proximo = atual.proximo;
        return;
      }
      anterior = atual;
      atual = atual.proximo;
    }
  }

// * 4.Considere casos especiais: certifique-se de pensar em casos especiais que possam ocorrer, como adicionar ou remover o primeiro nó da lista, ou tentar remover um paciente que não existe na lista;

// No método adicionarPaciente, já foi considerado o caso de adicionar o primeiro nó. Portanto, não há necessidade de alterações adicionais.

// No método removerPaciente, foi adicionada a variável anterior para armazenar o nó anterior ao nó atual durante a iteração. Isso permitirá que você atualize corretamente o campo proximo do nó anterior para remover o nó do paciente a ser excluído. Caso o paciente a ser removido esteja no primeiro nó, o campo proximo do primeiro nó é atualizado diretamente. Caso contrário, o loop percorre a lista até encontrar o paciente, mantendo a referência do nó anterior para que possa ser feita a atualização correta.


// * 3.Escreva uma função para listar todos os pacientes: esta função deve percorrer a lista encadeada e exibir as informações de cada paciente;

  listarPacientes() {
    let atual = this.primeiro;
    while (atual !== null) {
      console.log(`Nome: ${atual.nome}, Idade: ${atual.idade}, Peso: ${atual.peso}, Altura: ${atual.altura}`);
      atual = atual.proximo;
    }
  }

}


// * 5.Teste o seu código: uma vez que você tenha escrito as funções necessárias, é importante testá-las para garantir que elas funcionem corretamente. Tente adicionar, remover e listar pacientes em diferentes cenários para garantir que tudo funcione corretamente.

const lista = new ListaDePacientes();

lista.adicionarPaciente('João', 25, 80, 1.80);

lista.adicionarPaciente('Maria', 30, 60, 1.70);

lista.adicionarPaciente('José', 40, 90, 1.90);

lista.listarPacientes();

console.log('-------------------');

lista.removerPaciente('Maria');

lista.listarPacientes();





