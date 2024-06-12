import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const GraficoLinhas = () => {
  const [data, setData] = useState({
    x: [new Date().toLocaleTimeString()],
    y: [Math.floor(Math.random() * 10)],
  });

  useEffect(() => {

    const interval = setInterval(() => {
      setData(prevData => {
        const newX = new Date().toLocaleTimeString(); // Gera o horário atual
        const newY = Math.floor(Math.random() * 10); // Gera um número aleatório entre 0 e 9
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
            paper_bgcolor: '#1b1b1b', // cor de fundo do gráfico
            plot_bgcolor: '#1b1b1b', // cor de fundo da área do gráfico
            font: {
              color: '#ffffff', // cor do texto
            },
            xaxis: {
              gridcolor: '#000000', // cor da grade do eixo x
              zerolinecolor: '#444444', // cor da linha zero do eixo x
              linecolor: '#444444', // cor da linha do eixo x
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