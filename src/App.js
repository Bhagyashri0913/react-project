import { useState,useEffect, Fragment} from "react";
import AppComponent from "./Components/AppComponent/AppComponent";
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
  const submit=(event)=>{
    event.preventDefault();
    setScreen(0);
  }
  
const screenElem = <ScreenComponent
        data={flattenScreenData[activeScreen]} // pass only the data that is needed in the screen
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen} // this way we can set the screen from inside the screen component
    />;

  return (
    <Fragment>
     { screen===0 && <AppComponent onQuizStart={quizStartHandler}/>}
     {screen===1 && <div>{screenElem}</div>}
    </Fragment>
  )
}

export default App;
