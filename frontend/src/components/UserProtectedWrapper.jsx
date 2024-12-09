import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
	const token = localStorage.getItem("Uber-token");
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			navigate("/login");
		}
	}, [token, navigate]);

	return (
		<>
			{children}
		</>
	)
}

export default UserProtectedWrapper