import './App.css';
import Nav from './componet/Nav';
import Secsen1 from './componet/Section1';
import Secsen2 from './componet/Section2';
import Mts from './componet/Mts';
import Gotop from './componet/Gotop/Gotop';
import AboutSection from './componet/AboutSection';

function App() {
  return (
    <>
      <Gotop />
      <Nav />
      <Secsen1 />
      <Secsen2 />
      {/* <Mts /> */}
      <AboutSection/>
    </>
  );
}

export default App;
