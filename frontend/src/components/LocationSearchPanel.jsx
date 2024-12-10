const LocationSearchPanel = (props) => {
	const locations = [
		"15, Babutala Road, Nager Bazar, Dum Dum, Kolkata-700074",
		"16A, Babutala Road, Nager Bazar, Dum Dum, Kolkata-700074",
		"12, Babutala Road, Nager Bazar, Dum Dum, Kolkata-700074",
		"22B, Babutala Road, Nager Bazar, Dum Dum, Kolkata-700074"
	];

	return (
		<div>
			{locations.map(function (location, _idx) {
				return <div
					key={_idx}
					className="flex items-center p-3 justify-start my-2 gap-3 border-2 border-white active:border-black rounded-xl"
					onClick={() => {
						props.setVehiclePanel(true);
						props.setPanelOpen(false);
					}}
				>
					<h2 className="bg-[#eee] h-10 w-16 flex items-center justify-center rounded-full"><i className="ri-map-pin-fill text-lg"></i></h2>
					<h4 className="font-medium">{location}</h4>
				</div>
			})}
		</div>
	)
}

export default LocationSearchPanel