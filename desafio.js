// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa

const dados = [
  {
    nome: "MarangoniDEV",
    idade: 18,
    tecnologias: [
      { nome: "C++", especialidade: "Desktop" },
      { nome: "Python", especialidade: "Data Science" },
      { nome: "JavaScript", especialidade: "Web/Mobile" },
    ],
    empresa: [
      {
        nome: "Rocketseat",
        cor: "Roxo",
        Foco: "Programação",
        endereço: [
          {
            rua: "Rua Guilherme Gembala",
            número: 260,
          },
        ],
      },
    ],
  },
];

console.log(`O Usuário ${dados[0].nome} tem ${dados[0].idade} anos e usa a tecnologia ${dados[0].tecnologias[2].nome} com especialidade em ${dados[0].tecnologias[2].especialidade}, ele trabalha na empresa ${dados[0].empresa[0].nome} que tem foco em ${dados[0].empresa[0].Foco} e está localizada na rua ${dados[0].empresa[0].endereço[0].rua},${dados[0].empresa[0].endereço[0].número}.`)