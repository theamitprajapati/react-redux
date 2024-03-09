import logo from "./logo.svg";
import "./App.css";
import Blog from "./Blog";
import { createStore } from "redux"
import reducer from "./store/reducer"
import { Provider } from "react-redux"
import Hook from "./components/Hook"
import { useState } from "react";
 

const store = createStore(reducer)


function App() {
  const [a,setA] = useState(0)
  const [b,setB] = useState(0)
  function sum(){
    setA(a+2)
  }
  return (
    <Provider store={store}>
    <div className="App">  
    <Hook a={a} f={sum}/>

    <button onClick={()=>setB(b+1)}>+{b} B </button>    
    <hr/>
      <Blog/>
    </div>
    </Provider>
  );
}

export default App;
