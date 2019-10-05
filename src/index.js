import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { TimelineMax } from 'gsap'

import "./styles.css";
import LogRocket from "./logrocket";

function App() {

  const tl = new TimelineMax()

  useEffect(() => {
    tl.fromTo("#rocket", 2, {y: 50}, {y: 0})
    tl.to("#letters path", 3, {
      strokeDashoffset: 0
    });
    tl.to("#letters path", 3, { "fill-opacity": 1 }); 
  }, [])

  return (
    <div className="App">
      <LogRocket />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
