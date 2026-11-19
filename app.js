const produto = "Mouse Gamer RGB";
const categoria = "Periféricos";
let preco = 89.90;
let estoque = 15;


console.log("=== SISTEMA DE ESTOQUE ===");
console.log("Produto: " + produto);
console.log("Categoria: " + categoria);
console.log("Preço: R$" + preco.toFixed(2));
console.log("Estoque: " + estoque + " unidades");

console.log("\n=== VALOR TOTAL EM MOUSES ===");
console.log("Total: R$" + (preco * estoque).toFixed(2));