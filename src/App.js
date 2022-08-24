import { useState,Fragment} from "react";
import StartComponent from "./Components/StartComponent";
import EndComponent from "./Components/EndComponent";
import ScreenComponent from "./Components/ScreenComponent";
import data from "./data/data.json";
import React from "react";



const flattenScreenData = Object.entries(data.screen_data);

const App=()=> {
  const [screen,setScreen] = useState(0);
  const [activeScreen,setActiveScreen] = useState(0);
  const [activescreen_score,setActivescreen_score]= useState(0);
  

 
  const quizStartHandler=(event)=>{
    event.preventDefault();
    setScreen(1);
  }
  

  const quizEndHandler=(event)=>{
    event.preventDefault();
    alert(`You scored ${score} marks !!!`)
    setScreen(0);
    setActiveScreen(0);
    setActivescreen_score(0);
  }
// add data to local storage
localStorage.setItem("score",JSON.stringify(activescreen_score));
let score = localStorage.getItem("score",JSON.stringify(activescreen_score));

const screenElem = <ScreenComponent
        data={flattenScreenData[activeScreen]}
        activeScreen={activeScreen}
        activescreen_score={activescreen_score}
        setActiveScreen={setActiveScreen}
        setActivescreen_score={setActivescreen_score}
        setScreen={setScreen}
    />;

  return (
    <Fragment>
     { screen===0 && <StartComponent onQuizStart={quizStartHandler}/>}
     {screen===1 && <div>{screenElem}</div>}
     { screen===2 && <EndComponent onQuizEnd={quizEndHandler}/>}
    </Fragment>
  )
}

export default App;
