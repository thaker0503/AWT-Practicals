
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import logo from './img/logo.png'

function App() {
  return (
    <>
      <Header/>
      <Main logo={logo}/>
      <Footer/>
    </>
  );
}

export default App;
