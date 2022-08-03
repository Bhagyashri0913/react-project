import "./screen1.css";

const Screen1=({nextHandler1,data1,type1,choices1})=> {
  console.log()
  return (
<div className="screen1">
     <div className="screen-content1">
        <h2 className="question1">{data1.screen_data["screen-1"].question}</h2>
        <h3 className="question-type1">{data1.screen_data["screen-1"].type}</h3>
        <button className="question-choices"><h2>{data1.screen_data["screen-1"].answers[0]}</h2></button>
        <button className="question-choices"><h2>{data1.screen_data["screen-1"].answers[1]}</h2></button>
        <button className="question-choices"><h2>{data1.screen_data["screen-1"].answers[2]}</h2></button>
        <button className="question-choices"><h2>{data1.screen_data["screen-1"].answers[3]}</h2></button>
        <div>
        <button className="next-button" onClick={nextHandler1}>Next</button>
        </div>
    </div>
</div>

  );
}

export default Screen1;
