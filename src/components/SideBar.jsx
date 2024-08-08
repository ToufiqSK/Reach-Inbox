import { useState } from "react";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import logo from '../assets/logo.svg';
import PropTypes from 'prop-types';


function SideBar({ onMenuItemClick }) {
  const [selectedItem, setSelectedItem] = useState('/');

  const handleMenuItemClick = (path) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  return (
    <div className="dark:bg-[#101113] bg-white overflow-y-scroll no-scrollbar h-screen w-14 flex flex-col justify-between items-center py-6 border-r-2 dark:border-[#343A40] border-[#E0E0E0] fixed z-10 left-0">
      <div className="rounded-xl">
        <img src={logo} className="h-8 rounded-xl object-left overflow-visible" alt="Logo" />
      </div>
      <div className="text-[#AEAEAE] text-2xl space-y-10">
        <div
          className={`cursor-pointer p-1 ${selectedItem === '/' ? 'bg-gray-600 rounded-lg' : ''}`}
          onClick={() => handleMenuItemClick('/')}
        >
          <RiHome5Fill />
        </div>
        <div
          className={`cursor-pointer p-1 ${selectedItem === '/search' ? 'bg-gray-600 rounded-lg' : ''}`}
          onClick={() => handleMenuItemClick('/search')}
        >
          <RiUserSearchLine />
        </div>
        <div
          className={`cursor-pointer p-1 ${selectedItem === '/mail' ? 'bg-gray-600 rounded-lg' : ''}`}
          onClick={() => handleMenuItemClick('/mail')}
        >
          <RiMailFill />
        </div>
        <div
          className={`cursor-pointer p-1 ${selectedItem === '/send' ? 'bg-gray-600 rounded-lg' : ''}`}
          onClick={() => handleMenuItemClick('/send')}
        >
          <IoIosSend />
        </div>
        <div
          className={`cursor-pointer p-1 ${selectedItem === '/stack' ? 'bg-gray-600 rounded-lg' : ''}`}
          onClick={() => handleMenuItemClick('/stack')}
        >
          <SiElasticstack />
        </div>
        <div
          className={`cursor-pointer p-1 ${selectedItem === '/inbox' ? 'bg-gray-600 rounded-lg' : ''}`}
          onClick={() => handleMenuItemClick('/inbox')}
        >
          <FaInbox />
        </div>
        <div
          className={`cursor-pointer p-1 ${selectedItem === '/stacks' ? 'bg-gray-600 rounded-lg' : ''}`}
          onClick={() => handleMenuItemClick('/stacks')}
        >
          <IoStatsChartSharp />
        </div>
      </div>
      <div className="text-white flex justify-center items-center w-[32px] h-[32px] bg-green-900 p-2 rounded-full">
        TS
      </div>
    </div>
  );
}

SideBar.propTypes = {
  onMenuItemClick: PropTypes.string.isRequired,
  
};

export default SideBar;
