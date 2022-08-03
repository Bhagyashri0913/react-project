import "./screen2.css";

const Screen2=({nextHandler2})=> {
  return (
<div className="screen2">
     <div className="screen-content2">
        <h2 className="question2">question SECOND</h2>
        <button className="next-button2" onClick={nextHandler2}>Next</button>

    </div>
</div>

  );
}

export default Screen2;