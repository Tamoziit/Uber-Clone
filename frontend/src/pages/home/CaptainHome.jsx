import { Link } from "react-router-dom";
import CaptainDetails from "../../components/CaptainDetails";
import RidePopup from "../../components/RidePopup";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const ridePopupPanelRef = useRef(null);

  useGSAP(function () {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(0)"
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(100%)"
      });
    }
  }, [ridePopupPanel]);

  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img className="w-16" src="/driver-logo.svg" alt="captain-home" />
        <Link to="/home" className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img className="h-full w-full object-fit object-cover" src="/temp.gif" alt="cover" />
      </div>

      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>

      <div ref={ridePopupPanelRef} className="fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-6 pt-12">
        <RidePopup setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>
  )
}

export default CaptainHome