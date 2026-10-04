export class Pedido {
  #id;
  #data;
  #status;
  #total;
  #formaPgto;
  #cliente;
  #itens = [];
  #endereco;

  static #proximoId = 1;

  constructor(total, status, data, formaPgto, itens, cliente, endereco) {
    this.#id = Pedido.#proximoId++;
    this.#total = total;
    this.#status = status;
    this.#data = data;
    this.#formaPgto = formaPgto;
    this.#cliente = cliente
    this.#itens = itens;
    this.#endereco = endereco;
  }
} 