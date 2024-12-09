import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import UserSignup from "./pages/users/UserSignup";
import UserLogin from "./pages/users/UserLogin";
import CaptainSignup from "./pages/captains/CaptainSignup";
import CaptainLogin from "./pages/captains/CaptainLogin";
import { useContext } from "react";
import { UserDataContext } from "./context/UserContext";

function App() {
  const ans = useContext(UserDataContext);
  console.log(ans);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
      </Routes>
    </>
  )
}

export default App
