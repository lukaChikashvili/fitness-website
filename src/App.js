
import { useScroll, useSpring } from "framer-motion";
import About from "./components/About";
import Header from "./components/Header";
import Main from "./components/Main";
import Trainers from "./components/Trainers";
import {motion} from 'framer-motion';
import SmoothScroll from "./components/SmoothScroll";


function App() {

  const {scrollYProgress} = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="App">
      <SmoothScroll>
     <Header />
     <Main />
      <About />
      <Trainers />

      <motion.div  className='w-full h-2 bg-orange-500 fixed bottom-0 left-0 origin-bottom-left' style={{scaleX}}></motion.div>
      </SmoothScroll>
    </div>
  );
}

export default App;
