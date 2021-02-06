import './App.css';
import Button from 'react-bootstrap/Button';
import FlipCards from "./Flip-cards/Flip-cards"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>pair-game</h1>
        <FlipCards></FlipCards>
        <Button variant="danger">BT Button</Button>
      </header>
    </div>
  );
}

export default App;
