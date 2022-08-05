import { useState,useEffect, Fragment} from "react";
import AppComponent from "./Components/AppComponent/AppComponent";
import ScreenComponent from "./Components/ScreenComponent";
import screen_data from "./Data/Data.json";
const App=()=> {
  const [screen,setScreen] = useState(0);

  const quizStartHandler=(event)=>{
    event.preventDefault();
    setScreen(1);
  }
  const submit=(event)=>{
    event.preventDefault();
    setScreen(0);
    alert (totalScore);
  }
let total_screen1Score=0;
let total_screen2Score=0;
let total_screen3Score=0;

let totalScore = total_screen1Score + total_screen2Score + total_screen3Score;


  return (
    <Fragment>
    {screen === 0 && <AppComponent onQuizStart={quizStartHandler}/>}
    {screen === 1 && <ScreenComponent
      data = {screen_data}
      submitHandler={submit}
      screen1_score={total_screen1Score}
    />}
    </Fragment>
  )
}

export default App;
