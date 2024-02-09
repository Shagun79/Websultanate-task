
import './App.css';
import { About } from './component/About/About';
import Join from './component/Join/Join';
import LearnMore from './component/LearnMore/LearnMore';
import Navbar from './component/Navbar/Navbar';
import Number from './component/Number/Number';
import PeopleFirst from './component/PeopleFirst/PeopleFirst';
import Values from './component/Values/Values';
import Mission from "./component/Mission/Mission";
import { Footer } from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Mission/>
      <Number/>
      <Values/>
      <PeopleFirst/>
      <LearnMore/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
