import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign from "./pages/Sign";
import CreateAccount from "./pages/CreateAccount";
import Dashboard from "./pages/Dashboard";
import Send from "./pages/Send";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="/signin" element={<Sign />}></Route>
          <Route path="/signup" element={<CreateAccount />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/send" element={<Send />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
