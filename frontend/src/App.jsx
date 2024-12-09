import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Home from "./pages/home/Home";
import UserSignup from "./pages/users/UserSignup";
import UserLogin from "./pages/users/UserLogin";
import CaptainSignup from "./pages/captains/CaptainSignup";
import CaptainLogin from "./pages/captains/CaptainLogin";
import { useContext } from "react";
import { UserDataContext } from "./context/UserContext";
import UserProtectedWrapper from "./components/userProtectedWrapper";
import UserLogout from "./pages/users/UserLogout";

function App() {
  const ans = useContext(UserDataContext);
  console.log(ans);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
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
      </Routes>
    </>
  )
}

export default App
