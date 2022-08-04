import { useState } from "react";
import "./screen1.css";

const Screen1=({data1,screen1_score,onsetScreen})=> {
  const [selected,setSelected] = useState('');
  const [error,setError] = useState('');


  console.log()
  const clickHandler=()=>{
  setSelected(data1.screen_data["screen-1"].answers[0]);
  if(error){
    setError('');
  }

  }
const nextHandler1=(event)=>{
  event.preventDefault();
  if (selected === ''){
  setError('Please select one option!');
  }else{
  onsetScreen(2);
  }
}

return (
<div className="screen1">
     <div className="screen-content1">
        <h2 className="question1">{data1.screen_data["screen-1"].question}</h2>
        <h3 className="question-type1">{data1.screen_data["screen-1"].type}</h3>

        {data1.screen_data.answers.map((i)=> (
        <button className="question-choices" onClick={clickHandler}><h2>{i}</h2></button>

))}
        <button className="question-choices" ><h2>{data1.screen_data["screen-1"].answers[1]}</h2></button>
        <button className="question-choices" ><h2>{data1.screen_data["screen-1"].answers[2]}</h2></button>
        <button className="question-choices" ><h2>{data1.screen_data["screen-1"].answers[3]}</h2></button>

        {error && <div className="error-text">{error}</div>}

        <div>
        <button className="next-button" onClick={nextHandler1}>Next</button>
        </div>
    </div>
</div>

  );
}

export default Screen1;
