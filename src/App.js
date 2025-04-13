import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Menu from './pages/Menu'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/menu" exact Component={Menu}></Route>
          <Route path="/contact" exact Component={Contact}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;