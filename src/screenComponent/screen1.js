import "./screen1.css";

const Screen1=({nextHandler1,data})=> {
  console.log(data.screen_data)
  return (
<div className="screen1">
     <div className="screen-content1">
        <h2 className="question1">first question</h2>
        <button className="next-button1" onClick={nextHandler1}>Next</button>

    </div>
</div>

  );
}

export default Screen1;
