import { useState } from "react";
import "./ScreenComponent.css";

const ScreenComponent=({data,activeScreen,setActiveScreen,submitHandler,setScreen,activescreen_score,setActivescreen_score})=> {

  const [selected,setSelected] = useState('');
  const [next,setNext] = useState(false);
  

let nextHandler=(event)=>{
  event.preventDefault();
  onFinishScreen()

}
console.log("hello",activescreen_score);

const onFinishScreen = () => {
  if(activeScreen < data.length){
    setActiveScreen(activeScreen + 1);
    setNext(false);
  }else if(activeScreen===data.length){
  setScreen(2);
  }
}

const clickHandler=(event) => {
  setNext(true);
  let useranswer= event.target;
  console.log(useranswer)
if(useranswer===data[1].correct_answer){
  setActivescreen_score(activescreen_score+1)
  console.log("hii")
}
}

const handler=(event)=>{
let useranswer = event.target.value;
if(useranswer=data[1].correct_answer){
  setActivescreen_score(activescreen_score+1)
}
setNext(true);
}

let component ;

if(data[1].type==="single-choice"){
 component = <div>
 <h2 className="question">{data[1].question}</h2>
 <h3 className="question-type">{data[1].type}</h3>
 {(data[1].answers.map((answer)=><button className="question-choices" onClick={clickHandler}>{answer}</button>))}

 {next  &&
 <div>
 <button className="next-button" onClick={nextHandler}>Next{next}</button>
 </div>}
 </div>
}else if(data[1].type==="multiple-choice"){
component = <div>
        <h2 className="question">{data[1].question}</h2>
        <h3 className="question-type">{data[1].type}</h3>
        {(data[1].answers.map((answer)=><button className="question-choices" onClick={clickHandler}>{answer}</button>))}

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
     <input type="text" className="answer-box" placeholder="Type answer here..." onChange={handler}></input>
     </div>
     {next  &&
     <button className="next-button" onClick={onFinishScreen}>Next{next}</button>
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
