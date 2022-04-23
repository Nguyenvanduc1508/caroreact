
import './App.css';
import Game from './components/Game';


function App() {
  function start() {
    alert('Bắt đầu trò chơi!')
  }
  start();
  return (
    <div className="App">
        <Game />
    </div>
  );
}

export default App;
