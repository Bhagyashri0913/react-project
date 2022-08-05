import { useState } from "react";
import "./ScreenComponent.css";

const ScreenComponent=({data,screen1_score,submitHandler,screen3_score})=> {
  const [activeScreen,setActiveScreen] = useState(data.screen_data["screen-1"]);
  const [type,setType] = useState(data.screen_data["screen-1"].type);
  const [selected,setSelected] = useState('');
  const [next,setNext] = useState(false);

console.log(data.screen_data)


let nextHandler=()=>{
  console.log("hello")
  setActiveScreen(data.screen_data["screen-2"]);
  setType("multiple-choice");

}

const clickHandler=()=>{
  let useranswer = setSelected(data.screen_data["screen-1"].answers[0]);

  if(setSelected){
    setNext(true);
  }

  if(setSelected){
   if( useranswer = data.screen_data["screen-1"].correct_answer){
  screen1_score =+ 1;
  console.log(screen1_score)
}
  }

}

const handler=(event)=>{
    setNext(0);
  let useranswer = event.target.value;
  if (useranswer === data.screen_data["screen-3"].correct_answer){
    screen3_score=+1;
    console.log(screen3_score)
  }
}

return (
  <div>
    <div className="screen">
     <div className="screen-content">
{type === "single-choice" ?
    <div>
        <h2 className="question">{activeScreen.question}</h2>
        <h3 className="question-type">{activeScreen.type}</h3>
        {(activeScreen.answers.map((answer)=><button className="question-choices" onClick={clickHandler}>{answer}</button>))}

        {next  &&
        <div>
        <button className="next-button" onClick={nextHandler}>Next{next}</button>
        </div>}
        </div>

:type === "multiple-choice" ?
    <div>
        <h2 className="question">{activeScreen.question}</h2>
        <h3 className="question-type">{activeScreen.type}</h3>
        {(activeScreen.answers.map((answer)=><button className="question-choices" onClick={clickHandler}>{answer}</button>))}

        {next &&
        <div>
        <button className="next-button" onClick={nextHandler}>Next{next}</button>
        </div>}
    </div>
:<div>
     <h2 className="question">{activeScreen.question}</h2>
     <h3 className="question-type">{activeScreen.type}</h3>
     <div>
     <input type="text" className="answer-box" placeholder="Type answer here..." onChange={handler}></input>
     </div>
     {next  &&
     <button className="submit-button" onClick={submitHandler}>Next{next}</button>
     }
</div>
}
</div>
</div>

</div>
  );
}

export default ScreenComponent;
