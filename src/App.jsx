import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skill';
import Work from './components/Work';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Work/>
      <Skills />
    </div>
  );
};

export default App;