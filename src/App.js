import './App.css';
import Home from './Views/Home';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </>
  );
}

export default App;
