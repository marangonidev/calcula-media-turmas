//Criar um programa que calcula a media 
//das turmas de alunos e envia 
// mensagem do calculo da media

const alunosdaturmaA = [
    {
        nome: "Mayk",
        nota: 9.8
    },
    {
        nome: "José",
        nota: 10
    },
    {
        nome: "Carlito",
        nota: 10
    },
    {
        nome: "alunito",
        nota: 1
    }
]

const alunosdaturmaB = [
    {
        nome: "Alex",
        nota: 5
    },
    {
        nome: "João",
        nota: 7
    },
    {
        nome: "Gabriel",
        nota: 0
    },
    {
        nome: "Daniel",
        nota: 10
    }
]

function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
       soma = soma + alunos[i].nota
     }    

     const media = soma / alunos.length 
     return media
}

const media1 = calculaMedia(alunosdaturmaA)
const media2 = calculaMedia(alunosdaturmaB)

function EnviaMensagem(media,turma) {
    if(media > 5) {
        console.log(`A media da ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A media da ${turma} foi menor que 5`)
    }
}

EnviaMensagem(media1, 'TurmaA')
EnviaMensagem(media2, 'TurmaB')