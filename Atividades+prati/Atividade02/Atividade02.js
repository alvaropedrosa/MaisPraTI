1.
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "Prata"
  };
  
  for (const propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
  }

  2.
  const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia"
  };
  
  if (!livro.editora) {
    livro.editora = "Allen & Unwin";
  }
  
  console.log(livro);

  3.
  const produto = {
    nome: "Laptop",
    preco: 1200,
    estoque: 50,
    desconto: 10
  };
  
  function filtrarPropriedades(objeto, valorMinimo) {
    const novoObjeto = {};
    for (const propriedade in objeto) {
      if (objeto[propriedade] > valorMinimo) {
        novoObjeto[propriedade] = objeto[propriedade];
      }
    }
    return novoObjeto;
  }
  
  console.log(filtrarPropriedades(produto, 100));

  4.
  const pessoas = [
    { nome: "João", idade: 30, cidade: "São Paulo" },
    { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
    { nome: "Carlos", idade: 35, cidade: "Belo Horizonte" }
  ];
  
  for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
  }

  5.
  const alunos = [
    { nome: "Ana", nota1: 8, nota2: 9 },
    { nome: "Pedro", nota1: 7, nota2: 6 },
    { nome: "Lucas", nota1: 9, nota2: 8 }
  ];
  
  for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Aluno: ${aluno.nome}, Média: ${media}`);
  }

  6.
  const funcionarios = [
    { nome: "Ricardo", cargo: "Gerente", salario: 5000 },
    { nome: "Julia", cargo: "Analista", salario: 3000 },
    { nome: "Marcos", cargo: "Desenvolvedor", salario: 4000 }
  ];
  
  for (const funcionario of funcionarios) {
    if (funcionario.salario > 3500) {
      console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}`);
    }
  }

  7.
  const produtos = [
    { nome: "Camiseta", preco: 50, desconto: 0.1 },
    { nome: "Calça", preco: 100, desconto: 0.1 },
    { nome: "Sapato", preco: 150, desconto: 0.1 }
  ];
  
  produtos.forEach(produto => {
    produto.preco = produto.preco * (1 - produto.desconto);
  });
  
  console.log(produtos);

  8.
  const filmes = [
    { titulo: "O Poderoso Chefão", diretor: "Francis Ford Coppola", anoLancamento: 1972 },
    { titulo: "Pulp Fiction", diretor: "Quentin Tarantino", anoLancamento: 1994 },
    { titulo: "Cidade de Deus", diretor: "Fernando Meirelles", anoLancamento: 2002 }
  ];
  
  const titulos = [];
  filmes.forEach(filme => {
    titulos.push(filme.titulo);
  });
  
  console.log(titulos);

  9.
  const clientes = [
    { nome: "Fernanda", idade: 32, cidade: "Curitiba" },
    { nome: "Gustavo", idade: 28, cidade: "Porto Alegre" },
    { nome: "Isabela", idade: 35, cidade: "Salvador" }
  ];
  
  let contador = 0;
  clientes.forEach(cliente => {
    if (cliente.idade > 30) {
      contador++;
    }
  });
  
  console.log(`Número de clientes com mais de 30 anos: ${contador}`);

  10.
  const vendas = [
    { produto: "Camiseta", quantidade: 2, valor: 50 },
    { produto: "Calça", quantidade: 1, valor: 100 },
    { produto: "Sapato", quantidade: 1, valor: 150 }
  ];
  
  let valorTotal = 0;
  vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor;
  });
  
  console.log(`Valor total das vendas: ${valorTotal}`);

  11.
  const pedidos = [
    { cliente: "Ana", produto: "Camiseta", quantidade: 2 },
    { cliente: "Pedro", produto: "Calça", quantidade: 1 },
    { cliente: "Ana", produto: "Sapato", quantidade: 1 }
  ];
  
  const totalPorCliente = {};
  pedidos.forEach(pedido => {
    if (totalPorCliente[pedido.cliente]) {
      totalPorCliente[pedido.cliente] += pedido.quantidade;
    } else {
      totalPorCliente[pedido.cliente] = pedido.quantidade;
    }
  });
  
  console.log(totalPorCliente);

  12.
  const estoque = [
    { produto: "Camiseta", quantidade: 10, minimo: 20 },
    { produto: "Calça", quantidade: 30, minimo: 20 },
    { produto: "Sapato", quantidade: 15, minimo: 20 }
  ];
  
  estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2;
    }
  });
  
  console.log(estoque);
  
  console.log(`Valor total do carrinho: ${valorTotalCarrinho}`);

  13.
  const carrinho = {
    itens: [
      { nome: "Camiseta", quantidade: 2, precoUnitario: 50 },
      { nome: "Calça", quantidade: 1, precoUnitario: 100 },
      { nome: "Sapato", quantidade: 1, precoUnitario: 150 }
    ]
  };
  
  let valorTotalCarrinho = 0;
  carrinho.itens.forEach(item => {
    valorTotalCarrinho += item.quantidade * item.precoUnitario;
  });
  
  console.log(`Valor total do carrinho: ${valorTotalCarrinho}`);

  14.
  const empresa = {
    departamentos: [
      {
        nome: "RH",
        funcionarios: ["Maria", "João", "Ana"]
      },
      {
        nome: "TI",
        funcionarios: ["Carlos", "Pedro", "Lucas"]
      }
    ]
  };
  
  for (const departamento of empresa.departamentos) {
    for (const funcionario of departamento.funcionarios) {
      console.log(`Funcionário: ${funcionario}, Departamento: ${departamento.nome}`);
    }
  }

  15.
  const transacoes = [
    { tipo: "entrada", valor: 1000 },
    { tipo: "saída", valor: 500 },
    { tipo: "entrada", valor: 200 },
    { tipo: "saída", valor: 300 }
  ];
  
  let saldo = 0;
  transacoes.forEach(transacao => {
    if (transacao.tipo === "entrada") {
      saldo += transacao.valor;
    }
    })