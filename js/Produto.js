export class Produto {
  #id;
  #nome;
  #descricao;
  #preco;
  #imagem;

  static #proximoId = 1;

  constructor (nome, descricao, preco, imagem){
    this.#id = Produto.#proximoId++;
    this.#nome = nome;
    this.#descricao = descricao;
    this.#preco = preco;
    this.#imagem = imagem;
  }

  getId() {
    return this.#id;
  }

  getPreco() {
    return this.#preco
  }
}