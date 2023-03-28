import React, { useState } from 'react'
import Styles from './Quiz.module.css'
import {QuizData }from './QuizData'
import QuizResult from './QuizResult'
function Quiz(){
    const [CurrQuestion,setCrrQuestion]=useState(0)
    const[score,setScore]=useState(0)
    const[clickedOption,setClickedOption]=useState(0)
    const[showResult,setResult]=useState(false)
    const changeQuestion=()=>{
        UpdateScore();
     if(CurrQuestion<QuizData.length-1){
        setCrrQuestion(CurrQuestion+1);
        setClickedOption(0);
        }else{
           setResult(true)
        }
   }
   const UpdateScore =()=>{
    if(clickedOption===QuizData[CurrQuestion].answer){
        setScore(score+1)
    }
   }
  const resetAll=()=>{
    setResult(false);
    setCrrQuestion(0);
    setClickedOption(0);
    setScore(0);
  }
    
    return(
        <>
        <p className={Styles.heading}>Quiz App</p>
        <div className={Styles.Container}>
            {showResult?(
                <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
            ):(
                <>
            <div className={Styles.question}>
                <span id="questionNumber">{CurrQuestion+1}.</span>
                <span id='questionTxt'>{QuizData[CurrQuestion].question}</span>
            </div>
            <div className={Styles.option}>
              {QuizData[CurrQuestion].options.map((options,i)=>{
                
                return(
                    <button 
                    className={`Option-Btn ${
                        clickedOption ==i+1?"checked":null
                    }`}
                     
                     
                    key={i}
                    onClick={()=>setClickedOption(i+1)} >
                      { options}
                    </button>
                )
              })}

            </div>
          <input type="button" value="Next" id="Next" onClick={changeQuestion}/>
          </>)}
        </div>
        </>
    )
            }
export default Quiz