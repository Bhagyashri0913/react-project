import React from "react";
const EndComponent = ({onQuizEnd}) => {
    return (
      <div className="App">
      <div className="App-back-ground">
      <div className='body-box'>
       <div className="heading"><p>End Quiz </p>
         <div className="start-box">
           <button className="start-button" onClick={onQuizEnd}>Submit Quiz</button>
           <p className="check">CHECK YOUR SCORE !!!</p>
         </div>
       </div>
      </div>
      </div>
      </div>
    );
  }
 export default EndComponent;