import React from 'react'
import { useState } from 'react'
 function Lucky(){
    const luckyNumber=[5]
    const[guess,setGuess]=useState('');
    const[count,setCount]=useState(0);
    const[message,setMessage]=useState('');
    function handleClick(e) {
        e.preventDefault();
        setCount(count+1);
        const guessNumber =parseInt(guess)
        if(guess<luckyNumber){
            setMessage(`you guessed${guessNumber} you guessed a smaller number`)
        }else if(guess>luckyNumber){
            setMessage(`you guessed${guessNumber} you guessed a greater number`)
        } else if(luckyNumber.includes(guessNumber)){
            setMessage(`congratulations! you guessed a right number (${guessNumber}) in ${count+1} attempts`)
        }else{
            setMessage(`you guessed ${guessNumber} that's not lucky number`)
        }
        setGuess('');
     }
    return(
        <div> 
<input type ="text" id="num" placeholder='Guess lucky number...'value={guess} onChange={event =>setGuess(event.target.value)}>

</input>
<button onClick={handleClick}>Match</button><br></br>
<p>{message}</p>
        </div>
    )
 }
 export default Lucky