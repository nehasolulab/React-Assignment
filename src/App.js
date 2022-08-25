import StateChange from "./Tasks/Task-1/StateChange";
import Nav from "./Tasks/Navbar/Nav";
import Error from "./Tasks/Error/Error";
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route exact path='/' element = {<StateChange/>}/>
        <Route path="*" element = {<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
