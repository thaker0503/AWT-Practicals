
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import logo from './img/logo.png'
import Lines from './components/Lines';

function App() {
  return (
    <>
      <Header/>
      <Main logo={logo}/>
      <Footer/>
      <Lines/>
    </>
  );
}

export default App;
