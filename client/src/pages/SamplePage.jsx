import { useState } from "react";
import DropDownBar from "../components/DropDownNavBar.jsx";
import SideBar from "../components/SideBar.jsx";

function SamplePage() {
  const [mobileView] = useState(window.innerWidth < 768);

  return (
    <div>
      {mobileView ? <DropDownBar /> : <SideBar />}

      <div className="bottom-0 fixed block w-screen "></div>
    </div>
  );
}

export default SamplePage;
