import { useState } from "react";
import './app.scss';
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Destinations from "./views/Destinations/Destinations";
// import Crew from "./views/Crew";
// import Technology from "./views/Technology";

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleScreenChange = (id) => {
    setCurrentPage(id);
  }

  return (
    <div className="app">
      <Navbar 
      handleScreenChange={handleScreenChange}
      currentPage={currentPage} 
      />
      <div className="mainSlider"
      style={{
          transform: `translateX(${-100 * currentPage}vw)`}}>
        <Home 
          handleScreenChange={handleScreenChange}
          active={currentPage === 0 ? true : false} />
        <Destinations active={currentPage === 1 ? true : false} />
        {/* <Crew active={currentPage === 2 ? true : false} />
        <Technology active={currentPage === 3 ? true : false} />  */}
      </div>
    </div>
  )
}

export default App;
