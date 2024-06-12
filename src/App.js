import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";

import './App.css';
import GraficoComponent from './components/GraficoComponent';
import OperadoresLogados from './components/SocketIo'; 


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <main className="content">
            <Topbar/>
          </main>

          <OperadoresLogados />
          <GraficoComponent />

        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;

// Bibliotecas instaladas no início
// npm i @mui/material @emotion/react @emotion/styled @mui/x-data-grid @mui/icons-material react-router-dom@6 react-pro-sidebar@0.7.1 formik yup @fullcalendar/core @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/list @nivo/core @nivo/pie @nivo/line @nivo/bar @nivo/geo