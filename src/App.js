
import './App.css';
import React,{ useState } from 'react';
import Navbar from "./components/navbar.js"
import News from './components/news';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar';

function App(props) {
 
const [progress, setProgres] = useState(0)
const setProgress=(progress)=>{
  setProgres({progress:progress})
}


  
  return (
    <div className="App">
       <Router>
      <Navbar key="navbar"/>
      <LoadingBar height={3} color='#f11946' progress={progress}/>
     
        <Routes>
          
              <Route exact path="/"  element={<News key="home" pageSize={9} country="in" category="general"setProgress={setProgress} / >}/>
              <Route exact path="/business" element={<News key="business" pageSize={9} country="in" category="business"setProgress={setProgress} / >}/>
              < Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment"setProgress={setProgress} / >}/>
              < Route exact path="/general" element={<News key="general" pageSize={9} country="in" category="general"setProgress={setProgress} / >}/>
              <Route exact path="/health" element={<News key="health" pageSize={9} country="in" category="health"setProgress={setProgress} / >}/>
              <Route exact path="/science" element={<News key="science" pageSize={9} country="in" category="science"setProgress={setProgress} / >}/>
              <Route exact path="/sports" element={<News key="sports" pageSize={9} country="in" category="sports"setProgress={setProgress} / >}/>
              <Route exact path="/technology" element={<News key="technology" pageSize={9} country="in" category="technology"setProgress={setProgress} / >}/ >

        </Routes>
      </Router>
    </div>
  );
}

export default App;
