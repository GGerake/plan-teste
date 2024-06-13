import React, { useState, useEffect, useContext } from 'react';
import Plot from 'react-plotly.js';
import { SocketContext } from './SocketContext';

const GraficoLinhas = () => {
  const dadosOp = useContext(SocketContext);


  const [data, setData] = useState({
    x: [new Date().toLocaleTimeString()],
    y: [dadosOp.operadores_logados],
  });
  
  useEffect(() => {

    let contOperadoresLogados = dadosOp.operadores_logados

    const interval = setInterval(() => {

      try {
        contOperadoresLogados = document.querySelector('#qtdNumOperador').innerHTML

      } catch {}

      setData(prevData => {
        const newX = new Date().toLocaleTimeString(); // Gera o horário atual
        const newY = contOperadoresLogados; // Gera um número aleatório entre 0 e 9
        const newData = {
          x: [...prevData.x, newX],
          y: [...prevData.y, newY],
        };

        // Limitar a 30 pontos
        if (newData.x.length > 30) {
          newData.x = newData.x.slice(-30);
          newData.y = newData.y.slice(-30);
        }

        return newData;
      });
    }, 2000); // Atualiza a cada segundo

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (

<div className="chartArea">
    
    <div className="lineChart">
        <Plot
          data={[
            {
              x: data.x,
              y: data.y,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'blue' },
            },
          ]}
          layout={{
            title: 'Exemplo de Linhas',
            paper_bgcolor: '#0a0e16e3', // cor de fundo do gráfico
            plot_bgcolor: '#0a0e16', // cor de fundo da área do gráfico
            font: {
              color: '#ffffff', // cor do texto
            },
            xaxis: {
              gridcolor: '#000000', // cor da grade do eixo x
              zerolinecolor: '#444444', // cor da linha zero do eixo x
              linecolor: '#444444', // cor da linha do edeixo x
              linecolor: '#444444', // cor da linha do edeixo x
            },
            yaxis: {
              gridcolor: '#000000', // cor da grade do eixo y
              zerolinecolor: '#444444', // cor da linha zero do eixo y
              linecolor: '#444444', // cor da linha do eixo y
            },
            autosize: true, // permite que o gráfico seja redimensionado automaticamente
          }}
          useResizeHandler={true}
          style={{ width: '90%', height: '100%' }}
        />
    </div>
</div>

  );
};

export default GraficoLinhas;
