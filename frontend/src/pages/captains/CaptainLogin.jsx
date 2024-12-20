import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../../context/CaptainContext";

const CaptainLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { captain, setCaptain } = useContext(CaptainDataContext);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const captain = {
			email,
			password
		};

		const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
		if (response.status === 200) {
			console.log(response);
			const data = response.data;
			setCaptain(data.captain);
			localStorage.setItem('Uber-token', data.token);
			navigate("/captain-home");
		}

		setEmail("");
		setPassword("");
	}

	return (
		<div className="px-5 py-5 h-screen flex flex-col justify-between">
			<div>
				<img src="/driver-logo.svg" alt="logo" className="w-16 mb-7" />

				<form onSubmit={handleSubmit}>
					<h3 className="text-lg mb-2 font-medium ">What's your email</h3>
					<input
						required
						type="email"
						placeholder="email@example.com"
						className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-xl placeholder:text-base"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h3 className="text-lg mb-2 font-medium ">Enter password</h3>
					<input
						required
						type="password"
						placeholder="Enter your password"
						className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-xl placeholder:text-base"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button type="submit" className="bg-[#111] text-[#fff] mb-3 font-semibold px-4 py-2 w-full text-lg rounded-lg">Login</button>

					<p className="text-gray-600 text-center">Wanna Join a Fleet? <Link to="/captain-signup" className="hover:text-blue-600">Register as Captain</Link></p>
				</form>
			</div>

			<div>
				<Link to="/login" className="flex items-center justify-center bg-[#cccf26] hover:bg-[#cfaa26] text-[#fff] mb-5 font-semibold px-4 py-2 w-full text-lg rounded-lg">
					Sign in as User
				</Link>
			</div>
		</div>
	)
}

export default CaptainLogin