import React, { useState, useEffect, useContext, useRef } from 'react';
import { useTheme } from "@emotion/react";
import Plot from "react-plotly.js";
import { SocketContext } from './SocketContext';

const LineChart = () => {

  const dadosOp = useContext(SocketContext);
  const dadosOpRef = useRef(dadosOp); // referência para dadosOp
  // console.log(dadosOp)
  const theme   = useTheme();
  
  
  const [data, setData] = useState({
    x: [new Date().toLocaleTimeString()],
    y: [dadosOp.operadores_logados],
    });

  useEffect(() => {
    dadosOpRef.current = dadosOp;
  }, [dadosOp])

  useEffect(() => {
    const interval = setInterval(() => {
      const newX = new Date().toLocaleTimeString(); // horário atual
      const newY = dadosOpRef.current.operadores_logados; // usa o valor mais recente da referência   

      setData(prevData => {

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
      }, 2000); // Atualiza a cada 2 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);


  return (
    <Plot
      data={[{
          x: data.x,
          y: data.y,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "blue" },
        }]}
      layout={{
        title: "Exemplo de Linhas",
        paper_bgcolor: "#1b1b1b", // cor de fundo do gráfico
        plot_bgcolor: "#1b1b1b", // cor de fundo da área do gráfico
        font: {
          color: "#ffffff", // cor do texto
        },
        xaxis: {
          gridcolor: "#000000", // cor da grade do eixo x
          zerolinecolor: "#444444", // cor da linha zero do eixo x
          linecolor: "#444444", // cor da linha do eixo x
        },
        yaxis: {
          gridcolor: "#000000", // cor da grade do eixo y
          zerolinecolor: "#444444", // cor da linha zero do eixo y
          linecolor: "#444444", // cor da linha do eixo y
        },
        autosize: true, // permite que o gráfico seja redimensionado automaticamente
      }}
      useResizeHandler={true}
      style={{
        width: "90%",
        height: "100%",
        marginInline: "auto",
      }}
    />

  );
};

export default LineChart;
