import StateChange from "./Tasks/Task-1/StateChange";
import StateChangeRedux from "./Tasks/Task-3 (Redux)/StateChangeRedux"
import GetRequest from "./Tasks/Task-2/GetRequest";
import Nav from "./Tasks/Navbar/Nav";
import Error from "./Tasks/Error/Error";
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route exact path='/' element = {<StateChange/>}/>
        <Route exact path='/task-2' element = {<GetRequest/>}/>
        <Route exact path='/task-3' element = {<StateChangeRedux/>}/>
        <Route path="*" element = {<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
