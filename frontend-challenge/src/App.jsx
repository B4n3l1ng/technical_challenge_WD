import "./App.css";
import {Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import PhoneDetails from "./components/PhoneDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phone/:id" element={<PhoneDetails/>}/>
      </Routes>
    </div>
  )
}

export default App;
