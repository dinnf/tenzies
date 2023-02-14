import './App.css';
import Die from './components/Die'
import {useState,useEffect} from 'react'
import {nanoid} from 'nanoid'

function App() {
  const [newRoll, setNewRoll] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  useEffect(()=>{if (newRoll.every(newRoll.isHeld)){setTenzies(true)}},[newRoll])
  function allNewDice() {
   let randomNumberArray = []
    for (let i = 1; i<11; i++) {
        randomNumberArray.push(Math.ceil(Math.random() *6))
        
}
const newDiceObject = randomNumberArray.map(number => {return {value: number, isHeld: false, id:nanoid()}})
console.log(`newDiceObject: ${newDiceObject}`) 
return newDiceObject}
function refreshRoll() {
  setNewRoll(oldDice => oldDice.map(die => {
    return die.isHeld ? die : {value:Math.ceil(Math.random() *6),id: nanoid(), isHeld: false}
  }))
}


function holdDice(id) {
  setNewRoll(oldDice => oldDice.map(die => {
      return die.id === id ? 
          {...die, isHeld: !die.isHeld} :
          die
  }))
}
const dieElements = newRoll.map(element => <Die isHeld = {element.isHeld} key={element.id} value={element.value} holdDice={() =>holdDice(element.id)}/>)
  return (
    <main>
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="die-container">
          {dieElements}
        </div>
        <div>
          <button className="roll-dice" onClick={() => {refreshRoll()}}>Roll Dice</button>
          
        </div>
    </main>
  );
}

export default App;
