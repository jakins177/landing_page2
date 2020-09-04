import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPlayer from "react-player"
import Signup from './components/Signup'

function App() {
  return (
    <div className="App">
   <h1><mark>Need more traffic to your page?</mark> </h1>
<h2>"In NEW FREE BOOK 
You will Discover 20+ Virtually UNKNOWN Secrets
To Get Tons Of Traffic To *Any* Website, Funnel or Landing Page..."</h2>
   
   
    <div className="video-wrap">
      <ReactPlayer className="video"
        url='https://youtu.be/6ul1rYkMAQ8'/>
  </div>

    <Signup/>
   
   
    </div>
  );
}



export default App;
