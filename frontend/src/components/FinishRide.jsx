import { Link } from "react-router-dom";

const FinishRide = (props) => {
	return (
		<div>
			<h5
				className="p-1 text-center w-[93%] absolute top-0"
				onClick={() => {
					props.setFinishRidePanel(false);
				}}
			>
				<i className="text-3xl font-medium text-gray-400 ri-arrow-down-wide-line"></i>
			</h5>
			<h3 className="text-2xl font-semibold text-gray-800 mb-5">Finish this Ride</h3>

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
					<Link
						to="/captain-home"
						onClick={() => {

						}}
						className="w-full flex justify-center mt-3 mb-2 text-lg bg-green-600 hover:bg-green-800 text-white font-semibold p-3 rounded-lg"
					>
						Finish Ride
					</Link>

					<p className="text-gray-700 mt-6 text-xs">Click on Finish Ride button, if you have received the payment.</p>
				</div>
			</div>
		</div>
	)
}

export default FinishRide