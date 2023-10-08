import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyHero from "./components/hero";
import ContactMe from "./pages/ContactMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";




function App() {
  return (
   <>
    <MyHero></MyHero>
    <Skills></Skills>
    <Projects></Projects>
    <ContactMe></ContactMe>
    </>
   
  );
}

export default App;
