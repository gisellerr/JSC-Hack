import ButtonAppBar from "./mui/menuBar";
import Notepad from "./mui/Notepad";
import Background from "./mui/Background";
import Pulse from "./pulse";

function App() {
  return (
    <div className="allBody">
      <Background/>
      <ButtonAppBar/>
      <Pulse/>
      
      <h1>Hello World</h1>
      {/*<Notepad/>*/}
      
      
    </div>
  );
}

export default App;
