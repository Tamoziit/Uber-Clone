import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserData({
      username: {
        firstName,
        lastName
      },
      email,
      password
    })
    console.log(userData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  }

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <img src="/driver-logo.svg" alt="logo" className="w-16 mb-7" />

        <form onSubmit={handleSubmit}>
          <h3 className="text-base mb-2 font-medium ">What's your name</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              type="text"
              placeholder="Tamojit"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Das"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <h3 className="text-base mb-2 font-medium ">What's your email</h3>
          <input
            required
            type="email"
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-base mb-2 font-medium ">Enter password</h3>
          <input
            required
            type="password"
            placeholder="Enter your password"
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="bg-[#111] text-[#fff] mb-3 font-semibold px-4 py-2 w-full text-lg rounded-lg">Signup</button>

          <p className="text-gray-600 text-center">Already have an account? <Link to="/captain-login" className="hover:text-blue-600">Login</Link></p>
        </form>
      </div>

      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainSignup