import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import MainContent from './components/maincontent';

function App() {
  return (
    <div style={{display: "flex", flexDirection: "row", overflowY: "hidden"}}>
      <Navbar/>
      <MainContent/>
    </div>
  );
}

export default App;
