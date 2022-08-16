import { useEffect, useState } from "react";
import "./ScreenComponent.css";

const ScreenComponent=({data,activeScreen,setActiveScreen,setScreen,activescreen_score,setActivescreen_score})=> {
const [next,setNext] = useState(false);
const [selected,setSelected]=useState(false);
const[msqScore,setMcqscore]=useState(0);

const nextHandler = () => {
  if(activeScreen < data.length){
    setActiveScreen(activeScreen + 1);
    setNext(false);
  }else if(activeScreen===data.length){
  setScreen(2);
  }
}

const clickHandler1=(event) => {
  event.preventDefault();
  setNext(true);
let useranswer= event.target.textContent;
setSelected(true);
event.target.classList.add("question-choices-tick");

if(next===true){
  setSelected(false);
  event.target.classList.remove("question-choices-tick");
}
if(useranswer===data[1].correct_answer){
  setActivescreen_score(activescreen_score+1)
}

}

const clickHandler2=(event) => {
  event.preventDefault();
  setNext(true);
  let useranswer= event.target.textContent;

 event.target.classList.add("question-choices-tick");

if(useranswer===data[1].correct_answer[0]){
  setActivescreen_score(activescreen_score+1)
  setMcqscore(msqScore+1);
}else if(useranswer===data[1].correct_answer[1]){
  setActivescreen_score(activescreen_score+1)
  setMcqscore(msqScore+1);
  }else if (useranswer===data[1].answers[2]){
    if(msqScore>=1)
    setActivescreen_score(activescreen_score-1)
  }else if (useranswer===data[1].answers[3]){
    if(msqScore>=1)
    setActivescreen_score(activescreen_score-1)
  }
}
console.log(activescreen_score)

const clickHandler3=(event)=>{
event.preventDefault();
let useranswer = event.target.value;
if(useranswer===data[1].correct_answer){
  setActivescreen_score(activescreen_score+1)
}
setNext(true);
}

let component ;

if(data[1].type==="single-choice"){
 component = <div>
 <h2 className="question">{data[1].question}</h2>
 <h3 className="question-type">{data[1].type}</h3>
 {(data[1].answers.map((answer,index)=><button key={index} className="question-choices" onClick={clickHandler1}>{answer}</button>))}

 {next  &&
 <div>
 <button className="next-button" onClick={nextHandler}>Next{next}</button>
 </div>}
 </div>
}else if(data[1].type==="multiple-choice"){
component = <div>
        <h2 className="question">{data[1].question}</h2>
        <h3 className="question-type">{data[1].type}</h3>
        {(data[1].answers.map((answer,index)=><button key ={index}className="question-choices" onClick={clickHandler2}>{answer}</button>))}

        {next &&
        <div>
        <button className="next-button" onClick={nextHandler}>Next{next}</button>
        </div>}
    </div>
}else if(data[1].type==="single-input"){
 component =  <div>
     <h2 className="question">{data[1].question}</h2>
     <h3 className="question-type">{data[1].type}</h3>
     <div>
     <input type="text" className="answer-box" placeholder="Type answer here..." onChange={clickHandler3}></input>
     </div>
     {next  &&
     <button className="next-button" onClick={nextHandler}>Next{next}</button>
     }
</div>
}
return (
  <div>
    <div className="screen">
     <div className="screen-content">
{component}
</div>
</div>
</div>
  );
}

export default ScreenComponent;
