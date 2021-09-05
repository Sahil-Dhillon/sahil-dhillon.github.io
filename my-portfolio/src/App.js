
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Works from './components/Works';
// import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <main>
      <Header></Header>
      <About></About>
      <Works></Works>
      {/* <Skills></Skills> */}
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}

export default App;
