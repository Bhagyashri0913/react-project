import { useState } from "react";
import "./ScreenComponent.css";

const ScreenComponent=({data,activeScreen,setActiveScreen,submitHandler,setScreen})=> {
  console.log(data)
  const [type,setType] = useState(data[1].type);
  const [selected,setSelected] = useState('');
  const [next,setNext] = useState(false);
  const [answerselected,setAnswerSelected] = useState('');
  const [activescreen_score,setActivescreen_score]=useState(0);


console.log(activescreen_score)
let nextHandler=()=>{
  let useranswer = setSelected(data[1].answer);
  onFinishScreen()
  if(setSelected){
  if( useranswer === data[1].correct_answer){
  setActivescreen_score(activescreen_score + 1);
  }
  }
}

const onFinishScreen = () => {
  setActiveScreen(activeScreen + 1);
  console.log('hello!',activeScreen)
  if(data[activeScreen.length]){
  setScreen(2);
  }
}

const clickHandler=()=>{
  if(setSelected){
    setNext(true);
  }
  setAnswerSelected(true);
}

const handler=()=>{

}
console.log(data[1].question)
let component ;

if(type=== "single-choice"){
 component = <div>
 <h2 className="question">{data[1].question}</h2>
 <h3 className="question-type">{data[1].type}</h3>
 {(data[1].answers.map((answer)=><button className="question-choices" onClick={clickHandler}>{answer}</button>))}

 {next  &&
 <div>
 <button className="next-button" onClick={nextHandler}>Next{next}</button>
 </div>}
 </div>
}else if(type==="multiple-choice"){
component = <div>
        <h2 className="question">{data[1].question}</h2>
        <h3 className="question-type">{data[1].type}</h3>
        {(data[1].answers.map((answer)=><button className="question-choices" onClick={clickHandler}>{answer}</button>))}

        {next &&
        <div>
        <button className="next-button" onClick={nextHandler}>Next{next}</button>
        </div>}
    </div>
}else if(type==="single-input"){
 component =  <div>
     <h2 className="question">{data[1].question}</h2>
     <h3 className="question-type">{data[1].type}</h3>
     <div>
     <input type="text" className="answer-box" placeholder="Type answer here..." onChange={handler}></input>
     </div>
     {next  &&
     <button className="next-button" onClick={clickHandler}>Next{next}</button>
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
