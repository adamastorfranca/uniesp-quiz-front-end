import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { IBotao } from '../interfaces/prova.model';

export default function Botao(props: IBotao) {

    const { nome, selecionado, desativado, respostaCorreta, reset } = props;
    const [ cor, setCor ] = useState<string>('secondary');
    
    useEffect(() => {
        setCor(selecionado && respostaCorreta ? 'success' : selecionado && !respostaCorreta ? 'danger' : 'secondary');
    }, [respostaCorreta]);

    useEffect(() => {
        setCor('secondary');
    }, [reset]);

    return (
        <button     
            className={`btn btn-${desativado ? 'outline-' : ''}${cor} btn-sm ${selecionado}`}
            disabled={desativado}
        >
            {nome}
        </button>
    );
}
