const VehiclePanel = (props) => {
    return (
        <div>
            <h5
                className="p-1 text-center w-[93%] absolute top-0"
                onClick={() => {
                    props.setVehiclePanel(false);
                }}
            >
                <i className="text-3xl font-medium text-gray-400 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className="text-2xl font-semibold text-gray-800 mb-5">Choose a Vehicle</h3>

            <div
                className="flex w-full items-center justify-between p-3 hover:border-[3px] hover:border-black rounded-xl mb-2"
                onClick={() => {
                    props.setConfirmRidePanel(true);
                }}
            >
                <img className="h-10" src="/Car.png" alt="car" />
                <div className="-ml-2 w-1/2">
                    <h4 className="font-semibold text-base">UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className="font-medium text-sm text-gray-800">2 mins away</h5>
                    <p className="text-xs text-gray-600">Affordable, Compact Rides</p>
                </div>
                <h2 className="text-lg font-semibold">₹193.20</h2>
            </div>

            <div
                className="flex w-full items-center justify-between p-3 hover:border-[3px] hover:border-black rounded-xl mb-2"
                onClick={() => {
                    props.setConfirmRidePanel(true);
                }}
            >
                <img className="h-10" src="/moto.png" alt="moto" />
                <div className="ml-2 w-1/2">
                    <h4 className="font-semibold text-base">Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className="font-medium text-sm text-gray-800">3 mins away</h5>
                    <p className="text-xs text-gray-600">Affordable Motorcycle Rides</p>
                </div>
                <h2 className="text-lg font-semibold">₹65.50</h2>
            </div>

            <div
                className="flex w-full items-center justify-between p-3 hover:border-[3px] hover:border-black rounded-xl mb-2"
                onClick={() => {
                    props.setConfirmRidePanel(true);
                }}
            >
                <img className="h-10" src="/auto.png" alt="auto" />
                <div className="ml-2 w-1/2">
                    <h4 className="font-semibold text-base">UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
                    <h5 className="font-medium text-sm text-gray-800">5 mins away</h5>
                    <p className="text-xs text-gray-600">Affordable Auto Rides</p>
                </div>
                <h2 className="text-lg font-semibold">₹118.68</h2>
            </div>
        </div>
    )
}

export default VehiclePanel;