import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import logo from './logo.svg';
import Find from './components/find/Find'
import Driver from './components/driver/Driver';
import Luxury from './components/luxary/Luxary';
import  Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
<Navbar/>
<Hero/>
<Find/>
<Driver/>
<Luxury/>
<Footer/>
    </div>
  );
}

export default App;
