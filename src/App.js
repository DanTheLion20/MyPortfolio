import "bootstrap/dist/css/bootstrap.min.css"
import MyHero from "./components/hero";
import Skills from "./pages/Skills";
import ContactMe from "./pages/ContactMe";
import './App.css';




function App() {
  return (
   <>
     <MyHero></MyHero>
    <Skills></Skills>
    <ContactMe></ContactMe>
    </>
   
  );
}

export default App;
