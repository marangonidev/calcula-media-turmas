//Crie um programa que armazena um array de usuários (objetos), cada usuário tem um 
//nome e suas tecnologias (novo array), por exemplo

const usuarios = [
    {
        nome: 'Livia',
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: 'Lavinia',
        tecnologias: ["JavaScript", "CSS" ]
    },
    {
        nome: "Carlos",
        tecnologias: ["HTML", "Node.js"]
    }
]

//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

for (let i = 0; i < usuarios.length; i++) {
    const usarioUsaCss = verificarUsuarioUsaCss(usuarios[i]);
  
    if (usarioUsaCss) {
      console.log(`O usuario ${usuarios[i].nome} utiliza CSS`);
    }
  }
  
  function verificarUsuarioUsaCss(usuario) {
    for (let i = 0; i < usuario.tecnologias.length; i++) {
      if (usuario.tecnologias[i] === "CSS") {
        return true;
      }
    }
  }
