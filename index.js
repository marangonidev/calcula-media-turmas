// Criar um programa que calcula a média 
// Das turmas de alunos e envia 
// mensagem do calculo da média.

const AlunosdaTurmaA = [
    {
        nome: 'João',
        nota: 1.8
    },
    { 
        nome: 'Mayk',
        nota: 10
    },
    {
        nome: 'fulano',
        nota: 6
    },
    {
        nome: 'mais um aluno',
        nota: 0
    }
]

const AlunosdaTurmaB = [
    {
        nome: 'Cleber',
        nota: 0
    },
    { 
        nome: 'Mariano',
        nota: 8.5
    },
    {
        nome: 'Cliclano',
        nota: 5
    },
    {
        nome: 'AlunoNovo',
        nota: 10
    }
]

function CalculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}

const media1 = CalculaMedia(AlunosdaTurmaA)
const media2 = CalculaMedia(AlunosdaTurmaB)


function EnviaMensagem(media, turma) {
    //se a média for maior que 5, parabenizar
    if (media > 5) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A média da ${turma} é menor que 5`)
    }
}

EnviaMensagem(media1, 'TurmaA')
EnviaMensagem(media2, 'TurmaB') 