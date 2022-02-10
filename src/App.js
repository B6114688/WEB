import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WorkTab from './pages/WorkTab';
import AddNew from './pages/AddNew';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import AddUser from './pages/AddUser';
import { reactLocalStorage } from 'reactjs-localstorage';
/*import Edit from './pages/Edit';*/
import Updatework from './pages/Updatework';



function App() {
  const name = reactLocalStorage.getObject("Xuser")[0]?.user
  const role = reactLocalStorage.getObject("Xuser")[0]?.role
  //console.log("55555",role)
  if (role === "admin") {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/addnew' element={<AddNew />} />
          <Route path='/worktab' element={<WorkTab />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path='/update' element={<Updatework />} />
        </Routes>
      </Router>
    );
  }else if(role === "user"){
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/addnew' element={<AddNew />} />
          <Route path='/worktab' element={<WorkTab />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Home />} />
          <Route path='/update' element={<Updatework />} />
        </Routes>
      </Router>
    );
  }else{
    return (
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Login />} />
          <Route path='/home' element={<Login />} />
          <Route path='/addnew' element={<Login />} />
          <Route path='/worktab' element={<Login />} />
          <Route path='/dashboard' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/adduser' element={<Login />} />
        </Routes>
      </Router>
    );
  }
}


export default App;