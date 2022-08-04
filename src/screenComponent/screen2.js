import "./screen2.css";

const Screen2=({nextHandler2,data2,screen2_score})=> {
  return (
<div className="screen2">
     <div className="screen-content2">
        <h2 className="question2">{data2.screen_data["screen-2"].question}</h2>
        <h3 className="question-type2">{data2.screen_data["screen-2"].type}</h3>
        <button className="question-choices"><h2>{data2.screen_data["screen-2"].answers[0]}</h2></button>
        <button className="question-choices"><h2>{data2.screen_data["screen-2"].answers[1]}</h2></button>
        <button className="question-choices"><h2>{data2.screen_data["screen-2"].answers[2]}</h2></button>
        <button className="question-choices"><h2>{data2.screen_data["screen-2"].answers[3]}</h2></button>
        <div>
        <button className="next-button" onClick={nextHandler2}>Next</button>
        </div>
    </div>
</div>

  );
}

export default Screen2;