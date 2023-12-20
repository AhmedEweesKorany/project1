import Login from "./components/Login";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
   <BrowserRouter>
      <Routes>
  <Route path="/Login" Component={Login}/>
<Route path="/Signup" Component={Signup}/>
</Routes>
    <div className=" container">
     
    </div>
   </BrowserRouter>
  );
}

export default App;
