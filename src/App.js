import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstFun name ="pakibaji"></FirstFun>
      </header>
    </div>
  );
}

function FirstFun(props){
  const styleBtn = {
    transitionDuration: 'transition-duration: 0.4s',
    size: '50px',
    borderRadius:'0.4rem',
    color: 'gray',
  }
  const styleDiv ={
    margin : '0 auto',
    display: 'flex'
  }
   return (<div style ={styleDiv}>
<input style ={{borderRadius: '0.4rem', height:'5vh', textAlign:'center'}} type="text" placeholder="Search about Bangladesh" size="50"/>
<button  style={styleBtn}>click me</button>
</div>
   ) 
}

function SecondFun(props){
  const [data, setData] = useState();
  
}

export default App;
