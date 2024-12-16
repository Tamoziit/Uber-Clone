import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Home from "./pages/home/Home";
import UserSignup from "./pages/users/UserSignup";
import UserLogin from "./pages/users/UserLogin";
import CaptainSignup from "./pages/captains/CaptainSignup";
import CaptainLogin from "./pages/captains/CaptainLogin";
import UserProtectedWrapper from "./security/userProtectedWrapper";
import UserLogout from "./pages/users/UserLogout";
import CaptainHome from "./pages/home/CaptainHome";
import CaptainProtectedWrapper from "./security/CaptainProtectedWrapper";
import Riding from "./pages/riding/Riding";
import CaptainRiding from "./pages/riding/CaptainRiding";
import { useContext } from "react";
import { UserDataContext } from "./context/UserContext";
import { CaptainDataContext } from "./context/CaptainContext";

function App() {
  const ans = useContext(UserDataContext);
  const ans2 = useContext(CaptainDataContext);
  console.log("user", ans);
  console.log("captain", ans2);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-home" element={
          <CaptainProtectedWrapper>
            <CaptainHome />
          </CaptainProtectedWrapper>
        } />
        <Route path="/home" element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />
        <Route path="/user/logout" element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        } />
        <Route path="/riding" element={
          <UserProtectedWrapper>
            <Riding />
          </UserProtectedWrapper>
        } />
        <Route path="/captain-riding" element={
          <CaptainProtectedWrapper>
            <CaptainRiding />
          </CaptainProtectedWrapper>
        } />
      </Routes>
    </>
  )
}

export default App
