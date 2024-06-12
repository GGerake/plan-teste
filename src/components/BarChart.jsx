import { useTheme } from "@emotion/react";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data}
      theme={{
        text: {
          fontSize: 40,
          fill: colors.grey[100],
        },
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
              fontSize: 10,
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
              fontSize: 20,
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={["Indisponível", "Em Pausa", "Conversando", "Disponível"]}
      indexBy="status"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.15}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={["#333333", "#ffff00", "#0000ff", "#008000"]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{}}
      axisLeft={null}
      enableLabel={false}
      enableTotals={true}
      enableGridY={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      role="application"
      isInteractive={false}
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) => e.indexValue + ": " + e.formattedValue}
    />
  );
};

export default BarChart;
