import "./screen3.css";

const Screen3=({submitHandler,data3,screen3_score})=> {

let handler=(event)=>{
let useranswer = event.target.value;
if (useranswer === data3.screen_data["screen-3"].correct_answer){
  screen3_score=+1;
  console.log(screen3_score)
}
}
  return (
<div className="screen3">
     <div className="screen-content3">
        <h2 className="question3">{data3.screen_data["screen-3"].question}</h2>
        <h3 className="question-type3">{data3.screen_data["screen-3"].type}</h3>
        <div>
        <input type="text" className="answer-box" placeholder="Type answer here..." onChange={handler}></input>
        </div>
        <button className="submit-button" onClick={submitHandler}>Submit</button>

    </div>
</div>

  );
}

export default Screen3;