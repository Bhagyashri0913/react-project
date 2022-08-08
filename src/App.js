import { useState,useEffect, Fragment} from "react";
import StartComponent from "./Components/StartComponent";
import EndComponent from "./Components/EndComponent";
import ScreenComponent from "./Components/ScreenComponent";
import data from "./Data/Data.json";
const flattenScreenData = Object.entries(data.screen_data);

const App=()=> {
  const [screen,setScreen] = useState(0);
  const [activeScreen,setActiveScreen] = useState(0);

  const quizStartHandler=(event)=>{
    event.preventDefault();
    setScreen(1);
  }

  const quizEndHandler=(event)=>{
    event.preventDefault();
    alert("hello")
    setScreen(0);
  }

const screenElem = <ScreenComponent
        data={flattenScreenData[activeScreen]}
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
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
