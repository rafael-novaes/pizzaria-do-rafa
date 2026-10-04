export class Carrinho {
  #itens = [];

  getItens() {
      return [...this.#itens];
  }

  adicionarItem(item) {
    this.#itens.push(item)
  }

  removerItem(itemARemover) {
    this.#itens = this.#itens.filter(item => item !== itemARemover);
  }

  getSubTotal(itemACalcular) {
    const item = this.#itens.find(item => item === itemACalcular)

    if(item){
      return item.getQuantidade() * item.getProduto().getPreco();
    }
    return 0;
  }

  calcularTotal(){
    let total = 0;
    this.#itens.forEach(item => {
      total += this.getSubTotal(item);
    });
    return total
  }

  calcularTaxaDeEntrega() {
    if(this.calcularTotal() >= 80) {
      return 0;
    }
    return 10.00
  }
}