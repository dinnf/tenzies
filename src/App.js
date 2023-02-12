import './App.css';
import Die from './components/Die'
import {useState} from 'react'

function App() {
  function allNewDice() {
    let randomNumberArray = []
    for (let i = 1; i<11; i++) {
        randomNumberArray.push(Math.ceil(Math.random() *6))
}
console.log(randomNumberArray)}
const [newRoll, setNewRoll] = useState(allNewDice())
console.log(newRoll)
  return (
    <main>
        <div className="die-container">
          <Die value="1"/>
          <Die value="1"/>
          <Die value="1"/>
          <Die value="1"/>
          <Die value="1"/>
          <Die value="1"/>
          <Die value="1"/>
          <Die value="1"/>
          <Die value="1"/>
          <Die value="1"/>
        </div>
    </main>
  );
}

export default App;
