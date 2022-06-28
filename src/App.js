// import logo from './logo.svg';
import './App.css';
import Login from './assets/Login';
import Auth from './assets/Signup';
import { Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/login" element={<Login />} />
        </Routes> 
      </div>
  );
}


export default App;
