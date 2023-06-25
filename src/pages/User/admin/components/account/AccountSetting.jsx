import { AiOutlineMenuUnfold } from "react-icons/ai";
import SideBar from "../SideBar";
import AdminHeader from "../header/AdminHeader";
import MobileSidebar from "../MobileSidebar";
import { useState } from "react";
import AccountDetail from "./AccountDetail";

const AdminAccountSetting = () => {
  const [leftPanelOpened, setLeftPanelOpened] = useState(false);
  return (
    <div className="">
      <AdminHeader />
      <div className="relative top-[100px] flex gap-3 px-[10px] md:px-[80px]">
        <SideBar selectedItem={4} selectedProduct={10} />
        <div className="w-full mb-[200px]">
          <div className="w-full mb-4 py-3 px-4  bg-gray-200 text-center">
            <p className="text-2xl font-normal text-slate-800">
              Account Setting
            </p>
          </div>
          <div className="">
            <AccountDetail />
          </div>
        </div>

        <button
          onClick={() => setLeftPanelOpened(true)}
          title="Filter Scale"
          className="md:hidden fixed z-90 bottom-10 right-8 bg-blue-500 w-[60px] h-[60px] rounded-full drop-shadow-md flex justify-center items-center text-white hover:drop-shadow-2xl duration-300"
        >
          <AiOutlineMenuUnfold color="white" size={"25"} />
        </button>
      </div>
    </div>
  );
};

export default AdminAccountSetting;
