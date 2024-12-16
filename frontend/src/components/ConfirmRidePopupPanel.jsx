import { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopupPanel = (props) => {
	const [otp, setOtp] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(otp);
	}

	return (
		<div>
			<h5
				className="p-1 text-center w-[93%] absolute top-0"
				onClick={() => {
					props.setConfirmRidePopupPanel(false);
				}}
			>
				<i className="text-3xl font-medium text-gray-400 ri-arrow-down-wide-line"></i>
			</h5>
			<h3 className="text-2xl font-semibold text-gray-800 mb-5">Confirm this Ride to start</h3>

			<div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
				<div className="flex items-center gap-3">
					<img className="h-12 w-12 rounded-full object-cover" src="/Driver.jpg" alt="user-img" />
					<h2 className="text-lg font-medium">Tamojit Das</h2>
				</div>
				<h5 className="text-lg font-semibold">2.2 KM</h5>
			</div>

			<div className="flex flex-col gap-2 justify-between items-center">
				<div className="w-full mt-5">
					<div className="flex items-center gap-5 p-3 border-b-2">
						<i className="text-lg ri-map-pin-user-fill"></i>
						<div>
							<h3 className="text-lg font-medium">562/11-A</h3>
							<p className="text-sm text-gray-600 -mt-1">Babutala Road, Nager Bazar, Dum Dum, Kolkata - 700074</p>
						</div>
					</div>
					<div className="flex items-center gap-5 p-3 border-b-2">
						<i className="text-lg ri-map-pin-2-fill"></i>
						<div>
							<h3 className="text-lg font-medium">15</h3>
							<p className="text-sm text-gray-600 -mt-1">Tentultala Road, Alom Bazar, Baranagar, Kolkata - 700153</p>
						</div>
					</div>
					<div className="flex items-center gap-5 p-3">
						<i className="text-lg ri-money-rupee-circle-fill"></i>
						<div>
							<h3 className="text-lg font-medium">₹193.20</h3>
							<p className="text-sm text-gray-600 -mt-1">Cash</p>
						</div>
					</div>
				</div>

				<div className="mt-4 w-full">
					<form onSubmit={(e) => handleSubmit(e)}>
						<input
							type="text"
							className="bg-[#eeeeee] w-full rounded px-6 py-4 border text-base font-mono placeholder:text-sm"
							placeholder="Enter OTP"
							value={otp}
							onChange={(e) => setOtp(e.target.value)}
						/>
						<Link
							to="/captain-riding"
							onClick={() => {

							}}
							className="w-full flex justify-center mt-5 bg-green-600 hover:bg-green-800 text-white text-lg font-semibold p-3 rounded-lg"
						>
							Confirm
						</Link>
						<button
							onClick={() => {
								props.setConfirmRidePopupPanel(false);
								props.setRidePopupPanel(false);
							}}
							className="w-full mt-1 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold p-3 rounded-lg"
						>
							Cancel
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ConfirmRidePopupPanel