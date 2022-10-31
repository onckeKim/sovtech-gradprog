import './App.css';
import { About } from './components/about';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <About/>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
