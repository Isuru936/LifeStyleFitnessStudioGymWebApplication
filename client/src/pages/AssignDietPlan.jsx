import SideBar from "../components/SideBar";
import bgImg from "../assets/bg-Img.png";
import DietPlanUserView from "../components/DietPlanUserView";

export default function AssignDietPlan() {
  const customBackgroundColor = "#fff";

  return (
    <div
      className="inline-flex flex-col items-start min-h-screen w-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{ backgroundColor: customBackgroundColor }}
        className="flex flex-col"
      >
        <div className="flex flex-col">
          <SideBar />
          <DietPlanUserView />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
