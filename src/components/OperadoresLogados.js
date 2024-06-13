import React, { useContext } from 'react';
import { SocketContext } from './SocketContext';

function OperadoresLogados() {
    const data = useContext(SocketContext);

    return (
        <div className='operadoresLogadosArea'>
            <h1>Teste de conexão Socket IO</h1>
            <div class="infos">
                
                <p>Operadores Logados:  <span id="qtdNumOperador">      {data.operadores_logados}</span></p>
                <p>Status Indisponível: <span id="statusIndisponivel">  {data.status_Indisponível}</span></p>
                <p>Status Em Pausa:     <span id="statusEmPausa">       {data.status_Em_Pausa}</span></p>
                <p>Status Conversando:  <span id="statusConversando">   {data.status_Conversando}</span></p>
                <p>Status Disponível:   <span id="statusDisponivel">    {data.status_Disponível}</span></p>
            </div>
        </div>
    );
}

export default OperadoresLogados;
