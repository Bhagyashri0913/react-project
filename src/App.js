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

  

  const quizStartHandler=()=>{
    setScreen(1);
  }
  const next1=()=>{
    setScreen(2);
  }
  const next2=()=>{
    setScreen(3);
  }
  const submit=()=>{
    setScreen(0);
  }
  return (
    <Fragment>
    {screen === 0 && <AppComponent onQuizStart={quizStartHandler}/>}
    {screen === 1 && <Screen1
      nextHandler1={next1}
      data1 = {screen_data}
    />}
    {screen === 2 && <Screen2
      nextHandler2={next2}
      data2 = {screen_data}
    />}
    {screen === 3 && <Screen3
      submitHandler={submit}
      data3 = {screen_data}
    />}
    </Fragment>
  )
}

export default App;
