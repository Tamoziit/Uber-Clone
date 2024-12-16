import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../../components/FinishRide";

const CaptainRiding = () => {
	const [finishRidePanel, setFinishRidePanel] = useState(false);
	const finishRidePanelRef = useRef(null);

	useGSAP(function () {
		if (finishRidePanel) {
			gsap.to(finishRidePanelRef.current, {
				transform: "translateY(0)"
			});
		} else {
			gsap.to(finishRidePanelRef.current, {
				transform: "translateY(100%)"
			});
		}
	}, [finishRidePanel]);

	return (
		<div className="h-screen">
			<div className="fixed p-6 top-0 flex items-center justify-between w-screen">
				<img className="w-16" src="/driver-logo.svg" alt="captain-home" />
				<Link to="/captain-home" className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
					<i className="ri-logout-box-r-line text-lg font-medium"></i>
				</Link>
			</div>

			<div className="h-4/5">
				<img className="h-full w-full object-fit object-cover" src="/temp.gif" alt="cover" />
			</div>

			<div
				className="h-1/5 p-6 relative flex items-center justify-between"
				onClick={() => setFinishRidePanel(true)}
			>
				<h5
					className="p-1 text-center w-[93%] absolute top-0"
					onClick={() => {
						setFinishRidePanel(true);
					}}
				>
					<i className="text-3xl font-medium text-gray-400 ri-arrow-up-wide-line"></i>
				</h5>
				<h4 className="text-xl font-semibold">4 KM away</h4>
				<button className="bg-green-600 hover:bg-green-800 text-white font-semibold p-3 px-10 rounded-lg">Complete Ride</button>
			</div>

			<div ref={finishRidePanelRef} className="fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-6 pt-12">
				<FinishRide setFinishRidePanel={setFinishRidePanel} />
			</div>
		</div>
	)
}

export default CaptainRiding