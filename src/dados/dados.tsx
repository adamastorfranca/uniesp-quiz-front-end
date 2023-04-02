import { IProva } from "../interfaces/prova.model";

export const dados: IProva = {
    perguntas: [
        {
            numero: 1,
            pergunta: 'O que é Front-end?',
            alternativas: [
                {
                    letra: 'A',
                    alternativa: 'Parte de um sistema que é oculta para o usuário.',
                    correta: false
                },
                {
                    letra: 'B',
                    alternativa: 'Parte de um sistema que é visível e interativa ao usuário.',
                    correta: true
                },
                {
                    letra: 'C',
                    alternativa: 'Parte da lógica que recebe as regras de négocio.',
                    correta: false
                },
                {
                    letra: 'D',
                    alternativa: 'Nenhuma das alternativas anteriores.',
                    correta: false
                }
            ]
        },
        {
            numero: 2,
            pergunta: 'O que é o React?',
            alternativas: [
                {
                    letra: 'A',
                    alternativa: 'Uma poderosa biblioteca JavaScript.',
                    correta: true
                },
                {
                    letra: 'B',
                    alternativa: 'Uma linguagem de programação.',
                    correta: false
                },
                {
                    letra: 'C',
                    alternativa: 'Um servidor de cloud.',
                    correta: false
                },
                {
                    letra: 'D',
                    alternativa: 'Todas as respostas anteriores.',
                    correta: false
                }
            ]
        },
        {
            numero: 3,
            pergunta: 'Quais são as principais tecnologias do mundo Front-end?',
            alternativas: [
                {
                    letra: 'A',
                    alternativa: 'Java, golang e python.',
                    correta: false
                },
                {
                    letra: 'B',
                    alternativa: 'AWS, Google Cloud e Azure.',
                    correta: false
                },
                {
                    letra: 'C',
                    alternativa: 'Kotlin, HTML e CSS.',
                    correta: false
                },
                {
                    letra: 'D',
                    alternativa: 'HTML, CSS e JavaScript.',
                    correta: true
                }
            ]
        }
    ]
};