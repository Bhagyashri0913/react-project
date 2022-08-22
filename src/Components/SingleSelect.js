import React from "react";
import { useState } from "react";


const SingleSelect = (data,activeScreen,setActiveScreen,activescreen_score,setActivescreen_score,setScreen) => {
  const [buttonSelected, setButtonSelected] = React.useState([false, false, false, false]); 
  const [next,setNext] = useState(false);
  const singleSelectHandler=(event,buttonIndex) => {
    event.preventDefault();
    setNext(true);
 let useranswer= event.target.textContent;
 const buttonSelectedClone = [...buttonSelected];
   buttonSelectedClone[buttonIndex] = !buttonSelectedClone[buttonIndex];
   setButtonSelected(buttonSelectedClone);
   if(useranswer===data.data[1].correct_answer){
     data.setActivescreen_score(data.activescreen_score+1)
   }
   }
   const nextHandler = () => {
    if(data.activeScreen < data.data.length){
     data.setActiveScreen(data.activeScreen + 1);
     setNext(false);
    }else if(data.activeScreen===data.length){
    data.setScreen(2);
    }
    setButtonSelected([false,false,false,false]);
   }
return (
  <div>
 <h2 className="question">{data.data[1].question}</h2>
 <h3 className="question-type">{data.data[1].type}</h3>
 {(data.data[1].answers.map((answer,index)=> <button key={index} className = {buttonSelected[index]? "question-choices-tick": "question-choices"}   onClick={(e) => singleSelectHandler(e, index)}>{answer}</button>))}

 {next  &&
 <div>
 <button className="next-button" onClick={nextHandler}>Next{next}</button>
 </div>}
 </div>
      )
    ;
  }

export default SingleSelect;