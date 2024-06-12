import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

function OperadoresLogados() {

    const [number, setNumber] = useState(null)

    useEffect(() => {
        const socket = io ('http://172.20.20.49:5020')

        socket.on('connect', () => {
            console.log('Conectado ao servidor')
        })

        socket.on('operadores_logados', (data) => {
            // console.log(`Operadores Logados: ${data.operadores_logados}`)
            setNumber(data.operadores_logados) // atualiza com o número recebido
        })

        return () => socket.disconnect()
    }, [])

    return(
        <div className='App'>
            <h1>Teste de conexão Socket IO</h1>
            <p>Operadores Logados: <div id="qtdNumOperador">{number}</div></p>
        </div>
        
    )
};

export default OperadoresLogados;