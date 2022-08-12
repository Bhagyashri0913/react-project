import { useState } from "react";
import "./ScreenComponent.css";

const ScreenComponent=({data,activeScreen,setActiveScreen,submitHandler,setScreen,activescreen_score,setActivescreen_score})=> {

  const [selected,setSelected] = useState('');
  const [next,setNext] = useState(false);

console.log("hello",activescreen_score);

const nextHandler = (event) => {
  event.preventDefault();

  if(activeScreen < data.length){
    setActiveScreen(activeScreen + 1);
    event.target.classList.remove("question-choices-tick");
    setNext(false);

  }else if(activeScreen===data.length){
  setScreen(2);
  }
}

const clickHandler1=(event) => {
  event.preventDefault();
  setNext(true);
  let useranswer1= event.target.textContent;
  event.target.classList.add("question-choices-tick");
  console.log(useranswer1)

if(useranswer1===data[1].correct_answer){
  setActivescreen_score(activescreen_score+1)
}
}
const clickHandler2=(event) => {
  event.preventDefault();
  setNext(true);
  let useranswer2= event.target.textContent;
  event.target.classList.add("question-choices-tick");

if(useranswer2===data[1].correct_answer[0]){
  setActivescreen_score(activescreen_score+1)
}else if(useranswer2===data[1].correct_answer[1]){
  setActivescreen_score(activescreen_score+1)
}
}

const clickHandler3=(event)=>{
event.preventDefault();
let useranswer3 = event.target.value;
if(useranswer3===data[1].correct_answer){
  setActivescreen_score(activescreen_score+1)
}
setNext(true);
}

let component ;

if(data[1].type==="single-choice"){
 component = <div>
 <h2 className="question">{data[1].question}</h2>
 <h3 className="question-type">{data[1].type}</h3>
 {(data[1].answers.map((answer)=><button className="question-choices" onClick={clickHandler1}>{answer}</button>))}

 {next  &&
 <div>
 <button className="next-button" onClick={nextHandler}>Next{next}</button>
 </div>}
 </div>
}else if(data[1].type==="multiple-choice"){
component = <div>
        <h2 className="question">{data[1].question}</h2>
        <h3 className="question-type">{data[1].type}</h3>
        {(data[1].answers.map((answer)=><button className="question-choices" onClick={clickHandler2}>{answer}</button>))}

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
