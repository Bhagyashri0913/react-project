import "./screen2.css";
import { useState } from "react";

const Screen2=({nextHandler2,data2,screen2_score})=> {
  const [selected,setSelected] = useState('');
  const [next,setNext] = useState('');

console.log(data2.screen_data["screen-2"].answers)

  const clickHandler=()=>{
  let useranswer = setSelected(data2.screen_data["screen-2"].answers[0]);

  if(setSelected){
    setNext(0);
    console.log("next")
  }

  if(setSelected){
   if( useranswer = data2.screen_data["screen-2"].correct_answer){
  screen2_score =+ 1;
  console.log(screen2_score)
   }
  }
}
  return (
<div className="screen2">
     <div className="screen-content2">
        <h2 className="question2">{data2.screen_data["screen-2"].question}</h2>
        <h3 className="question-type2">{data2.screen_data["screen-2"].type}</h3>
        <button className="question-choices" onClick={clickHandler}><h2>{data2.screen_data["screen-2"].answers[0]}</h2></button>

        <button className="question-choices"><h2>{data2.screen_data["screen-2"].answers[1]}</h2></button>
        <button className="question-choices"><h2>{data2.screen_data["screen-2"].answers[2]}</h2></button>
        <button className="question-choices"><h2>{data2.screen_data["screen-2"].answers[3]}</h2></button>
        {next===0 && <div>
        <button className="next-button" onClick={nextHandler2}>{next}</button>
        </div>
}
    </div>
</div>

  );
}

export default Screen2;