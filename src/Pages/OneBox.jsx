import { useEffect, useState } from "react";
import SubView from "../components/SubView";
import MainPage from "../components/MainPage";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import {  useNavigate } from "react-router-dom";

function OneBox() {
  const navigate = useNavigate();
  const token = "abcd";

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      localStorage.setItem("token", `Bearer ${token}`);
    }
  }, [token, navigate]);

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleMenuItemClick = (path) => {
    setSelectedComponent(path);
  };

  return (
    <div className="h-screen w-screen dark:bg-black bg-white pl-14">
      <SideBar onMenuItemClick={handleMenuItemClick} />
      <TopBar />
      <div>
        {/* Render the selected component based on the selected path */}
        {selectedComponent === "/" && <SubView />}
        {selectedComponent === "/search" && <SubView />}
        {selectedComponent === "/mail" && <SubView />}
        {selectedComponent === "/send" && <SubView />}
        {selectedComponent === "/stack" && <SubView />}
        {selectedComponent === "/inbox" && <MainPage />}
        {selectedComponent === "/stacks" && <SubView />}
      </div>
    </div>
  );
}

export default OneBox;
