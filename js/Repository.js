export class Repository {
  #produtos = new Map();
  #pedidos = new Map();

  // CRUD Produto

  adicionarProduto(produto){
    this.#produtos.set(produto.getId(), produto);
  }

  buscarProduto(id) {
    return this.#produtos.get(id)
  }

  atualizarProduto(produto) {
    if (!this.#produtos.has(produto.getId())) {
      throw new Error("Produto não encontrado.");
    }

    this.#produtos.set(produto.getId(), produto);
  }

  removerProduto(id) {
    this.#produtos.delete(id)
  }

  // CRUD Pedido

  adicionarPedido(pedido){
    this.#pedidos.set(pedido.getId(), pedido);
  }

  buscarPedido(id) {
    return this.#pedidos.get(id)
  }

  atualizarPedido(pedido) {
    if (!this.#pedidos.has(pedido.getId())) {
      throw new Error("Pedido não encontrado.");
    }

    this.#pedidos.set(pedido.getId(), pedido);
  }

  removerPedido(id) {
    this.#pedidos.delete(id)
  }
}