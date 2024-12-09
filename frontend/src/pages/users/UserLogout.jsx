import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
    const token = localStorage.getItem("Uber-token");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                localStorage.removeItem("Uber-token");
                navigate("/login");
            }
        });
    }, [navigate, token])

    return (
        <div>UserLogout</div>
    )
}

export default UserLogout