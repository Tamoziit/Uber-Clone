import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 16
        //opacity: 1
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
        //opacity: 0
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0
      });
    }
  }, [panelOpen]);

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)"
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)"
      });
    }
  }, [vehiclePanel]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img src="/logo.png" alt="logo" className="w-16 absolute left-5 top-5" />

      <div className="h-screen w-screen">
        <img className="h-full w-full object-fit object-cover" src="/temp.gif" alt="cover" />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] bg-white p-6 relative">
          <h5
            ref={panelCloseRef}
            className="absolute opacity-0 top-6 right-6 text-2xl"
            onClick={() => setPanelOpen(false)}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>

          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="line absolute h-16 w-0.5 top-[43.7%] left-10 bg-gray-800 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            <input
              onClick={() => setPanelOpen(true)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>
        </div>

        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14">
        <h5
          className="p-1 text-center w-[93%] absolute top-0"
          onClick={() => {
            setVehiclePanel(false);
          }}
        >
          <i className="text-3xl font-medium text-gray-400 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold text-gray-800 mb-5">Choose a Vehicle</h3>

        <div className="flex w-full items-center justify-between p-3 hover:border-[3px] hover:border-black rounded-xl mb-2">
          <img className="h-10" src="/Car.png" alt="car" />
          <div className="-ml-2 w-1/2">
            <h4 className="font-semibold text-base">UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className="font-medium text-sm text-gray-800">2 mins away</h5>
            <p className="text-xs text-gray-600">Affordable, Compact Rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹193.20</h2>
        </div>

        <div className="flex w-full items-center justify-between p-3 hover:border-[3px] hover:border-black rounded-xl mb-2">
          <img className="h-10" src="/moto.png" alt="moto" />
          <div className="ml-2 w-1/2">
            <h4 className="font-semibold text-base">Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className="font-medium text-sm text-gray-800">3 mins away</h5>
            <p className="text-xs text-gray-600">Affordable Motorcycle Rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹65.50</h2>
        </div>

        <div className="flex w-full items-center justify-between p-3 hover:border-[3px] hover:border-black rounded-xl mb-2">
          <img className="h-10" src="/auto.png" alt="auto" />
          <div className="ml-2 w-1/2">
            <h4 className="font-semibold text-base">UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className="font-medium text-sm text-gray-800">5 mins away</h5>
            <p className="text-xs text-gray-600">Affordable Auto Rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹118.68</h2>
        </div>
      </div>
    </div>
  )
}

export default Home