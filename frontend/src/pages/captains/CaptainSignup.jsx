import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCaptain = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptain);
    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('Uber-token', data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  }

  return (
    <div className="py-1 px-5 h-screen flex flex-col justify-between">
      <div>
        <img src="/driver-logo.svg" alt="logo" className="w-16 mb-3" />

        <form onSubmit={handleSubmit}>
          <h3 className="text-base mb-2 font-medium ">What's our Captain's name</h3>
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
          <h3 className="text-base mb-2 font-medium ">What's our Captain's email</h3>
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

          <h3 className='text-base font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text-sm'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text-sm'
              type="text"
              placeholder='Plate No.'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text-sm'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text-sm cursor-pointer'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

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