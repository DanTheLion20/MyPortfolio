import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MyHero from "./components/hero";
import Skills from "./pages/Skills";
import './App.css';



function App() {
  return (
    <BrowserRouter>
    <MyHero></MyHero>
    <Routes>
    <Route path="/Skills" element={<Skills></Skills>}></Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
