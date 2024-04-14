import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Goals from './Pages/Goals';
import Tour from './Tour/Tour';
import Tracker from './Pages/Tracker';
import Workout from './Pages/Workout';
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Navigate to ="/tour"/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/goals' element={<Goals/>}/>
      <Route path='/tour' element={<Tour/>}/>
      <Route path='/home' element={<Tracker/>}/>
      <Route path='/home/workout' element={<Workout/>} />
    </Routes>
    </>
  );
}

export default App;
