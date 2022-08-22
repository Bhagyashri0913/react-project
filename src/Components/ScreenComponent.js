import "./ScreenComponent.css";
import SingleInput from "./SingleInput";
import MultipleSelect from "./MultipleSelect";
import SingleSelect from "./SingleSelect";

const ScreenComponent=({data,activeScreen,setActiveScreen,setScreen,activescreen_score,setActivescreen_score})=> {

let component ;

if(data[1].type==="single-choice"){
component = <SingleSelect
data={data}
activeScreen={activeScreen}
activescreen_score={activescreen_score}
setActiveScreen={setActiveScreen}
setActivescreen_score={setActivescreen_score} 
setScreen={setScreen}/>

 
}else if(data[1].type==="multiple-choice"){
component = <MultipleSelect 
data={data}
activeScreen={activeScreen}
activescreen_score={activescreen_score}
setActiveScreen={setActiveScreen}
setActivescreen_score={setActivescreen_score} 
setScreen={setScreen}/>


}else if(data[1].type==="single-input"){
 component = <SingleInput 
 data={data}
 activeScreen={activeScreen}
 activescreen_score={activescreen_score}
 setActiveScreen={setActiveScreen}
 setActivescreen_score={setActivescreen_score} 
 setScreen={setScreen}/>
}
return (
  <div>
    <div className="screen">
     <div className="screen-content">
{component}
</div>
</div>
</div>
  );
}

export default ScreenComponent;
