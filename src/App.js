import Navbar from './components/Navbar';
import BlankSection from './components/BlankSection';
import HeroSection from './components/HeroSection';
import MainSection from './components/MainSection';
import './output.css';

function App() {
  return (
    <div className="App min-h-screen">
      <Navbar />
      <HeroSection />
      <MainSection />
      <BlankSection />
    </div>
  );
}

export default App;