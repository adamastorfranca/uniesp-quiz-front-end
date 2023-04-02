import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { dados } from '../dados/dados';
import { IResposta } from '../interfaces/prova.model';
import Botao from './Botao';

export default function Prova() {

    const [ respostas, setRespostas ] = useState<IResposta[]>(dados.perguntas.map(() => ({ resposta: -1, respondida: false, correta: false })));   
    const [ reset, setReset ] = useState(false);
    const todasRespondidas = respostas.every(r => r.respondida);

    useEffect(() => {
        setTimeout(() => {
            if (todasRespondidas) {
                verificaRespostas();
            }
        }, 500);
    }, [respostas])

    const selecionaAlternativa = (perguntaIndex: number, alternativaIndex: number): void => {
        if (!respostas[perguntaIndex].respondida) {
            setRespostas((respostasJaSelecionadas) => {
                const respostasAtualizadas = [...respostasJaSelecionadas];
                respostasAtualizadas[perguntaIndex] = { resposta: alternativaIndex, respondida: true, correta: false };
                if (dados.perguntas[perguntaIndex].alternativas[alternativaIndex].correta) {
                    respostasAtualizadas[perguntaIndex].correta = true;
                } else {
                    respostasAtualizadas[perguntaIndex].correta = false;
                }
                return respostasAtualizadas;
            });
        } else if (respostas[perguntaIndex].resposta === alternativaIndex) {
            alert('Resposta já selecionada!');
        } else if (respostas[perguntaIndex].resposta !== alternativaIndex) {
            alert('Você já selecionou sua resposta!');
        } 

        if (todasRespondidas) {
            verificaRespostas();
        }
    };

    const verificaRespostas = (): void => {
        let acertos = 0;
        for (let i = 0; i < dados.perguntas.length; i++) {
            if (respostas[i].resposta === dados.perguntas[i].alternativas.findIndex(a => a.correta)) {
                acertos++;
            }
        }

        const respostaUsuario = `Você acertou ${acertos} de ${dados.perguntas.length} perguntas.`;
        const confirmacao = window.confirm(respostaUsuario + '\n\nDeseja refazer a prova?');
    
        if (confirmacao) {
            setRespostas(dados.perguntas.map(() => ({ resposta: -1, respondida: false, correta: false })));
            setReset(!reset);
        }
    };

    return (
        <div className='container text-center p-3' >
            <img className='rounded-pill mb-3' src='uniesp.jpeg' />
            <div className='d-flex container bg-light rounded' style={{maxWidth: '500px'}}>   
                <div className='container justify-content-start'>
                    <h4 className='mt-4 mb-4'>Quiz de Front-end</h4>
                    
                    {dados.perguntas.map((p, ip) => (
                        <div className=' mb-4 p-1' key={ip}>
                            <h6 className='text-start mb-2'>{p.numero+')'} {p.pergunta}</h6>
                            
                            {p.alternativas.map((a, ia) => (
                                <div className='d-flex mb-1 align-items-center' key={ip+ia}>
                                    <div onClick={() => selecionaAlternativa(ip, ia)}>
                                        <Botao 
                                            nome={a.letra} 
                                            selecionado={respostas[ip].resposta === ia ? 'active' : ''}
                                            desativado={respostas[ip].respondida && respostas[ip].resposta !== ia}
                                            respostaCorreta={todasRespondidas ? a.correta : !a.correta}
                                            reset={reset}
                                        />
                                    </div>
                                    <p className={`my-auto ml-2 p-1 rounded ${!todasRespondidas ? 'bg-light' : 
                                                                        todasRespondidas && a.correta ? 'bg-success bg-opacity-50 text-opacity-75' : 
                                                                        'bg-danger bg-opacity-50 text-opacity-75'}`}
                                    >
                                        {a.alternativa}
                                    </p>            
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
