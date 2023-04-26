import './App.css';
import Home from './routes/Home';
import {  Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Routes>
      {/* <><Route exact path="/" component={Home} /></> */}
      <><Route path="/" element={<Home />} /></>
      </Routes>
    </div>
  );
  }
