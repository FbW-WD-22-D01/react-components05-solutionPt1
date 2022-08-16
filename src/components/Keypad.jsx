import React from 'react'

function Keypad({setOperator, calculate}) {
  
  function clickHandle(e){
    calculate(e.target.value)
  }

  const operators = ['+', '-', '/', '*']
  const buttons =[0,1,2,3,4,5,6,7,8,9]


  return (
    <div>
      {buttons.map((el) => <button onClick={clickHandle} key={el} value={el}>{el}</button>)}
      <br />
      
      {operators.map((el,index) => {
        return (
          <button 
            key={index} 
            value={el} 
            onClick={(e) => setOperator(e.target.value)}
            >
              {el}
            </button>)})
      }
        <button>RESULT</button>
    </div>
  )
}

export default Keypad