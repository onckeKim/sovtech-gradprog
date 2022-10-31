import './App.css';
import { About } from './components/about';
import Footer from './components/Footer/Footer';
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <About/>
      <Footer />
    </div>
  );
}

export default App;
