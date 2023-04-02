export interface IProva {
    perguntas: IPergunta[];
}

export interface IPergunta {
    numero: number;
    pergunta: string;
    alternativas: IAlternativa[];
}

export interface IAlternativa {
    letra: string;
    alternativa: string;
    correta: boolean; 
}

export interface IResposta {
    resposta: number;
    respondida: boolean;
    correta: boolean;
}

export interface IBotao {
    nome: string;
    selecionado: string;
    desativado: boolean;
    respostaCorreta: boolean;
    reset: boolean;
}
