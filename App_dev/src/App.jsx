import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'

import { lazy } from 'react'
const LazyLogin = lazy(()=>import("./Pages/Login"))
const LazySignup = lazy(()=>import("./Pages/Signup"))
const LazyHome = lazy(()=>import("./Pages/Home"))
const LazyLogin2 = lazy(()=>import("./Pages/Login"))
const LazyLogin3 = lazy(()=>import("./Pages/Login"))
const LazyForgot = lazy(()=>import("./Pages/ForgotPassword"))
const LazyContact = lazy(()=>import("./Pages/Contact"))
const LazyAbout = lazy(()=>import("./Pages/About"))
const LazyTerm = lazy(()=>import("./Pages/Term"))
const LazyPay = lazy(()=>import("./Pages/PaymentPage"))


// const LazyProfile = lazy(()=>import("./Pages/YogaAcademyDetails"))
// import UserLayout from './Pages/UserLayout'
const LazyProfile = lazy(() => import("./Pages/user/Profile"))

import LazyLayout from './Components/LazyLayout'
import UserLayout from './Pages/UserLayout'
import { Admin } from './Pages/Admin/Admin.jsx'

const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path='/home' element={<LazyLayout component={LazyHome}/>}/>
        <Route path='/profile' element={<LazyLayout component={LazyProfile}/>}/>
        <Route path="/about" element={<LazyLayout component={LazyAbout}/>}/>
        <Route path="/contact" element={<LazyLayout component={LazyContact}/>}/>
        <Route path="/terms" element={<LazyLayout component={LazyTerm}/>}/>
      </Routes>
    </UserLayout>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<LazyLayout component={LazyLogin}/>}/>
        <Route path="/signup" element={<LazyLayout component={LazySignup}/>}/>
        <Route path="/login" element={<LazyLayout component={LazyLogin2}/>}/>
        <Route path="/login1" element={<LazyLayout component={LazyLogin3}/>}/>
        <Route path="/forgot" element={<LazyLayout component={LazyForgot}/>}/>
        <Route path="/adminhome" element={<LazyLayout component={Admin}/>}/>
        <Route path="/payment" element={<LazyLayout component={LazyPay}/>}/>
        {/* <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
        <Route path="/profile" element={<LazyLayout component={LazyProfile}/>}/> */}
        <Route path="/user/*" element={<UserRoutes/>}/>

      </Routes>

   
    </div>
    </BrowserRouter>
  )
}

export default App
