import { useState } from "react";
import "./screen1.css";

const Screen1=({data1,screen1_score,nextHandler1})=> {
  const [selected,setSelected] = useState('');
  const [next,setNext] = useState('');

console.log(data1.screen_data["screen-1"].answers.map((answer)=><button>{answer}</button>))

  const clickHandler=()=>{
  let useranswer = setSelected(data1.screen_data["screen-1"].answers[0]);

  if(setSelected){
    setNext(0);
    console.log("next")
  }

  if(setSelected){
   if( useranswer = data1.screen_data["screen-1"].correct_answer){
  screen1_score =+ 1;
  console.log(screen1_score)
}
  }

  }

return (
<div className="screen1">
     <div className="screen-content1">
        <h2 className="question1">{data1.screen_data["screen-1"].question}</h2>
        <h3 className="question-type1">{data1.screen_data["screen-1"].type}</h3>
        {(data1.screen_data["screen-1"].answers.map((answer)=><button className="question-choices" onClick={clickHandler}>{answer}</button>))}

        {next ===0 &&
        <div>
        <button className="next-button" onClick={nextHandler1}>{next}</button>
        </div>}
    </div>
</div>

  );
}

export default Screen1;
