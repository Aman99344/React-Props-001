import './App.css';
import Cards from './Components/Colorcard';


function App() {
  return (
    <div className="App">
    <Cards colorcode="#FF8000" name= "Orange"/>
    <Cards colorcode="#FFF500" name= "Yellow"/>
    <Cards colorcode="#CCCCCC" name= "Light-Gray"/>
    <Cards colorcode="#7E41A2" name= "Purple"/>
    <Cards colorcode="#FF6663" name= "Pink"/>
    <Cards colorcode="#333333" name= "Gray"/> 
    <Cards colorcode="#000000" name= "Black"/> 
    <Cards colorcode="#38BB14" name= "Green"/>
    <Cards colorcode="#C90B0B" name= "Red"/>
    <Cards colorcode="#C14911" name= "Brown"/>
    </div>
  );
}

export default App;
