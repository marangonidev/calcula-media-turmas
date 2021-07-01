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

function pegarusuarios(usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
        console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]} e ${usuarios[i].tecnologias[1]}`)
        
        const tecnologias = usuarios[i].tecnologias 
        
        for (let j = 0; j < tecnologias.length; j++) {
            if (tecnologias[0] == "CSS" || tecnologias[1] == "CSS") {
                console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
            } else {
                console.log(`O usuário ${usuarios[i].nome} não trabalha com CSS`)
            }
        } 
    }
} 

const users = pegarusuarios(usuarios)

