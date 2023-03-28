import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div>
    Your  Score:{props.score}<br></br>
    Total score:{props.totalScore}
    </div>
    <button id ='Next' onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult
