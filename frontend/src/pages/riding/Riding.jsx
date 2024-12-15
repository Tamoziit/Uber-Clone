import { Link } from "react-router-dom"

const Riding = () => {
	return (
		<div className="h-screen">
			<Link to="/home" className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
				<i className="ri-home-5-line text-lg font-medium"></i>
			</Link>

			<div className="h-1/2">
				<img className="h-full w-full object-fit object-cover" src="/temp.gif" alt="cover" />
			</div>

			<div className="h-1/2 p-4">
				<div className="flex items-center justify-between">
					<img className="h-12" src="/Car.png" alt="car" />

					<div className="text-right">
						<h2 className="text-md font-medium">Damodar</h2>
						<h4 className="text-2xl font-semibold -mt-1 -mb-1">WB095462</h4>
						<p className="text-sm text-gray-600">White Suzuki Alto</p>
					</div>
				</div>

				<div className="flex flex-col gap-2 justify-between items-center">
					<div className="w-full mt-5">
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
				</div>

				<button className="w-full mt-5 bg-green-600 hover:bg-green-800 text-white font-semibold p-2 rounded-lg">Make a Payment</button>
			</div>
		</div>
	)
}

export default Riding