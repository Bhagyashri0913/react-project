import { useState} from "react";

const SingleInput = (data,activeScreen,setActiveScreen,setScreen) => {
  const [next,setNext] = useState(false);

    const singleInputHandler=(event)=>{
      event.preventDefault();
      let useranswer = event.target.value;
      if(useranswer===data.data[1].correct_answer){
        data.setActivescreen_score(data.activescreen_score+1)
      }
      setNext(true);
    } 
    const nextHandler = () => {
      if(data.activeScreen < data.data.length){
        data.setActiveScreen(data.activeScreen + 1);
        setNext(false);
      }else if(data.activeScreen===data.data.length){
      data.setScreen(2);
      }
     }
     
    return ( <div>
        <h2 className="question">{data.data[1].question}</h2>
        <h3 className="question-type">{data.data[1].type}</h3>
        <div>
        <input type="text" className="answer-box" placeholder="Type answer here..." onChange={singleInputHandler}></input>
        </div>
        {next  &&
        <button className="next-button" onClick={nextHandler}>Next{next}</button>
        }
   </div>);
  }

export default SingleInput;