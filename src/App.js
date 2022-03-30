import './CSS/style.css';
import Header from './components/header'; //header
import Home from './components/home';
import Features from './components/features';
import About from './components/about';

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <Features></Features>
      <About></About>
    </>
  );
}

export default App;
