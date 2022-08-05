import { useState,useEffect, Fragment} from "react";
import AppComponent from "./appComponent/AppComponent";
import Screen1 from "./screenComponent/screen1";
import Screen2 from "./screenComponent/screen2";
import Screen3 from "./screenComponent/screen3";
import screen_data from "./data/data.json";

const App=()=> {
  const [screen,setScreen] = useState(0);
  const [activeQuestion,setActiveQuestion] = useState(0);
  const [answers,setAnswer] = useState([]);



  const quizStartHandler=(event)=>{
    event.preventDefault();
    setScreen(1);
  }
  const next1=(event)=>{
    event.preventDefault();
    setScreen(2);
  }
  const next2=(event)=>{
    event.preventDefault();
    setScreen(3);
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

console.log(total_screen3Score)
  return (
    <Fragment>
    {screen === 0 && <AppComponent onQuizStart={quizStartHandler}/>}
    {screen === 1 && <Screen1
      data1 = {screen_data}
      screen1_score={total_screen1Score}
      nextHandler1={next1}
    />}
    {screen === 2 && <Screen2
      nextHandler2={next2}
      data2 = {screen_data}
      screen2_score={total_screen2Score}
    />}
    {screen === 3 && <Screen3
      submitHandler={submit}
      data3 = {screen_data}
      screen3_score={total_screen3Score}
    />}
    </Fragment>
  )
}

export default App;
