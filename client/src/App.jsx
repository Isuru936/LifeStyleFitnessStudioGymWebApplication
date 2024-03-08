import { Route, Routes } from 'react-router-dom';
import Login  from './pages/Login';
import Signup  from './pages/Signup';
import ForgetPassword  from './pages/ForgetPassword';
import NewPassword from './pages/NewPassword';
import Q1 from './pages/Q1';
import Q2 from './pages/Q2';
import Q3 from './pages/Q3';
import Q4 from './pages/Q4';
import Q5 from './pages/Q5';
import Q6 from './pages/Q6';
import Q7 from './pages/Q7';
import Q8 from './pages/Q8';
import Q9 from './pages/Q9';
import Q10 from './pages/Q10';
import UserProfile from './pages/UserProfile';
import EditProfile from './pages/EditProfile';
function App() {

  return (
      <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{"background":"white"}}>
        <Routes>
          <Route path='login' element={<Login/>}></Route>
          <Route path='sign-up' element={<Signup/>}></Route>
          <Route path='forget-password' element={<ForgetPassword/>}></Route>
          <Route path='new-password' element={<NewPassword/>}></Route>
          <Route path='Q1'element={<Q1/>}></Route>
          <Route path='Q2'element={<Q2/>}></Route>
          <Route path='Q3'element={<Q3/>}></Route>
          <Route path='Q4'element={<Q4/>}></Route>
          <Route path='Q5'element={<Q5/>}></Route>
          <Route path='Q6'element={<Q6/>}></Route>
          <Route path='Q7'element={<Q7/>}></Route>
          <Route path='Q8'element={<Q8/>}></Route>
          <Route path='Q9'element={<Q9/>}></Route>
          <Route path='Q10'element={<Q10/>}></Route>
          <Route path='profile' element={<UserProfile/>}></Route>
          <Route path='editProfile' element={<EditProfile/>}></Route>
        </Routes>
      </div> 
    )
  }
 export default App;
 