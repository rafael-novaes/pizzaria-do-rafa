import { Produto } from "./Produto.js";
import { ItemCarrinho } from "./ItemCarrinho.js";
import { Carrinho } from "./carrinho.js";
import { Repository } from "./Repository.js";

const p1 = new Produto("Pizza de Mussarela", "Muito queijo", 20, "any.png");
const p2 = new Produto("Pizza de Calabresa","Calabresa com cebola",25,"any2.png",);

const repository = new Repository();
repository.adicionarProduto(p1)

const item1 = new ItemCarrinho(p1, 3);
const item2 = new ItemCarrinho(p2, 1);

const carrinho = new Carrinho();
carrinho.adicionarItem(item1);
carrinho.adicionarItem(item2);