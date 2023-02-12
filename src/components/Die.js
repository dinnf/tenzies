import React from 'react'
import './Die.css'
function allNewDice() {
    let randomNumberArray = []
    for (let i = 1; i<7; i++) {
        randomNumberArray.push(Math.ceil(Math.random() *6))
}
console.log(randomNumberArray)}
allNewDice()
function Die(props) {
  return (
    <div className="die-face">
        <h2 className="face">{props.value}</h2>
    </div>
  )
}

export default Die