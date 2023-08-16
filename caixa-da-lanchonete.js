class CaixaDaLanchonete {
calcularValorDaCompra(formaDePagamento, itens) {
  // Definindo o cardápio com seus preços
  const cardapio = {
      'cafe': 3.00,
      'chantily': 1.50,
      'suco': 6.20,
      'sanduiche': 6.50,
      'queijo': 2.00,
      'salgado': 7.25,
      'combo1': 9.50,
      'combo2': 7.50
  };
  
  // Definindo os descontos e acréscimos
  const descontoDinheiro = 0.95;
  const acrescimoCredito = 1.03;
  
  // Inicializando o valor total da compra
  let valorTotal = 0.0;
  
  // Inicializando um objeto para rastrear os itens pedidos
  const itensPedidos = {};
  
  // Processando os itens do pedido
  itens.forEach(itemInfo => {
      const [itenCod, quantidadeStr] = itemInfo.split(',');
      const quantidade = parseInt(quantidadeStr);
      
      // Verificando se o item existe no cardápio
      if (!cardapio.hasOwnProperty(itenCod)) {
          return console.log("Item inválido!");
      }
      
      // Atualizando o objeto de itens pedidos
      if (itensPedidos.hasOwnProperty(itenCod)) {
          itensPedidos[itenCod] += quantidade;
      } else {
          itensPedidos[itenCod] = quantidade;
      }
      
      // Adicionando o valor do item ao total
      valorTotal += cardapio[itenCod] * quantidade;
  });
  
  // Verificando se há itens no carrinho de compra
  if (Object.keys(itensPedidos).length === 0) {
      return console.log("Não há itens no carrinho de compra!");
  }
  if (itensPedidos.hasOwnProperty('queijo') && itensPedidos['queijo'] < 2 && Object.keys(itensPedidos).length < 2) {
    return console.log("O item 'queijo' não pode ser comprado separadamente.");
}

if (itensPedidos.hasOwnProperty('chantily') && itensPedidos['chantily'] < 2 && Object.keys(itensPedidos).length < 2) {
 return console.log("O item 'chantily' não pode ser comprado separadamente.");
}


  
  // Aplicando descontos e acréscimos
  if (formaDePagamento === 'dinheiro') {
      valorTotal *=  descontoDinheiro;
  } else if (formaDePagamento === 'credito') {
      valorTotal *=  acrescimoCredito;
  } else if (formaDePagamento !== 'debito') {
      return console.log("Forma de pagamento inválida!");
  }
  
  // Retornando o valor total 
  return console.log(`Valor total da compra: R$ ${valorTotal.toFixed(2)}`);
}
}
export { CaixaDaLanchonete };

