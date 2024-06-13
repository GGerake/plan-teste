import React, { createContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

export const SocketContext = createContext()

export const SocketProvider = ({children}) => {

    const [data, setData] = useState({
        operadores_logados: null,
        status_Indisponível: null,
        status_Em_Pausa: null,
        status_Conversando: null,
        status_Disponível: null,
        alerta: null,
    })
    
    const listaInfosGraficos = [
         'operadores_logados'
        ,'status_Indisponível'
        ,'status_Em_Pausa'
        ,'status_Conversando'
        ,'status_Disponível'
        ,'alerta'
    ]

    useEffect(() => {
        const socket = io ('http://172.20.20.49:5020')

        socket.on('connect', () => {
            console.log('Conectado ao servidor')
        })


        listaInfosGraficos.forEach(info => {
            socket.on(info, (receivedData) => {
                setData(prevData => ({
                    ...prevData,
                    [info]: receivedData[info]
                }))
            })
        })


        return () => socket.disconnect()
    }, [])

    return (
        <SocketContext.Provider value={data}>
            {children}
        </SocketContext.Provider>
    );
};



/**
 *      Dados que vem do servidor:
 * 
        socketio.emit('operadores_logados'  , {'operadores_logados'     : number1}) #* Emite o número para todos os clientes conectados
        socketio.emit('status_Indisponível' , {'status_Indisponível'    : number2}) #* Emite o número para todos os clientes conectados
        socketio.emit('status_Em_Pausa'     , {'status_Em_Pausa'        : number3}) #* Emite o número para todos os clientes conectados
        socketio.emit('status_Conversando'  , {'Conversando'            : number4}) #* Emite o número para todos os clientes conectados
        socketio.emit('status_Disponível'   , {'status_Disponível'      : number5}) #* Emite o número para todos os clientes conectados
 */