
import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home';

import Header from './components/Header';

import Trabajo from './views/Trabajo'

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/trabajo/:id" element={<Trabajo/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
