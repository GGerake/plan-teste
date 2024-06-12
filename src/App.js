import './App.css';
import GraficoComponent from './components/GraficoComponent';
import OperadoresLogados from './components/SocketIo'; 


function App() {

    return(
        <div className='App'>
            <OperadoresLogados />
            <p>Teste local</p>
            <GraficoComponent />
        </div>
        
    )
};

export default App;
