import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import RightBox from "./components/right";
import LeftThing from "./components/left";


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
