import Home from "./scenes/Home/Home";
import Navbar from "./components/Navbar";
import POTD from "./scenes/PictureofZday/POTD";
import Planets from "./scenes/Planets/Planets";
import Mars from "./scenes/Mars/Mars";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <POTD/>
      <Planets/>
      <Mars/>
      <Footer/>
    </div>
    
  );
}

export default App;
