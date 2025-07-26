import './index.css'
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";


function App() {
  return (
    <div className='container'>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </div>
  );
}

export default App;