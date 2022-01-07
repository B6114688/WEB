import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import WorkTab from './pages/WorkTab';
import AddNew from './pages/AddNew';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import AddUser from './pages/AddUser';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/addnew' element={<AddNew />} />
          <Route path='/worktab' element={<WorkTab />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/adduser' element={<AddUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;