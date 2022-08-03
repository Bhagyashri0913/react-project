import "./screen3.css";

const Screen3=({submitHandler})=> {
  return (
<div className="screen3">
     <div className="screen-content3">
        <h2 className="question3">question LAST</h2>
        <button className="next-button3" onClick={submitHandler}>Submit</button>

    </div>
</div>

  );
}

export default Screen3;