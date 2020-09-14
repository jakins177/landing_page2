import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPlayer from "react-player"
import Signup from './components/Signup'
import Bonuses from './components/Bonuses'

function App() {
  return (
    <div className="App">
   <h1><mark>Need more traffic to your page?</mark> </h1>
<h2>"In NEW FREE BOOK 
You will Discover 20+ Virtually <br/> UNKNOWN Secrets from the Experts"</h2>
   
   
    <div className="video-wrap">
      <ReactPlayer className="video" width = "80%"
        url='https://youtu.be/6ul1rYkMAQ8'/>
  </div>


  <script async data-uid="e175be4cbe" src="https://fierce-trader-7874.ck.page/e175be4cbe/index.js"></script>

    <Signup/>
    <Bonuses/>
   
   
    </div>
  );
}



export default App;
