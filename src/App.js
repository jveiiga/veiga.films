import Footer from "./components/Footer";
import {
  SessionSeven, 
  SessionSix, 
  SessionThree, 
  SessionTwo,
  SessionOne,
} from"./components/Sessions";
import SessionEight from "./components/Sessions/SessionEight";
import SessionFive from "./components/Sessions/SessionFive";
import SessionFour from "./components/Sessions/SessionFour";

function App() {
  return (
    <div>
      <SessionOne />
      <SessionTwo />
      <SessionThree />
      <SessionSix />
      <SessionFour />
      <SessionFive />
      <SessionSeven />
      <SessionEight />
      <Footer />
    </div>
  );
}

export default App;
