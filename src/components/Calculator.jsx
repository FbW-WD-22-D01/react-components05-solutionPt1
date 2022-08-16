import React, {useState} from 'react'
import Display from './Display'
import Keypad from './Keypad'

export default function Calculator() {
  
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState(0)

  function calculate(value){
    const myNumber = Number(value)  
    
    if (operator.length > 0){
      console.log('rechne: result', result, operator, 'Zweite Zahl: ', myNumber)
    
    }else {
     console.log('erste Zahl') 
     setResult(myNumber)
    }
  }

  
  
  return (
    <div>
      <Display result={result} />
      <Keypad setOperator={setOperator} calculate={calculate}/>

    </div>
  )
}
