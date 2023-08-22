import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import RightBox from "./components/right/right";
import LeftThing from "./components/left/left";


function App() {
  return (
    <div className="app">
      <Navbar />
      <div>
        <RightBox />
        <LeftThing />
      </div>
      <Footer />
    </div>
  );
}

export default App;
