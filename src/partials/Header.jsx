import React, { useState } from 'react';

import SearchModal from '../components/ModalSearch';
import Notifications from '../components/DropdownNotifications';
import Help from '../components/DropdownHelp';
import UserMenu from '../components/DropdownProfile';
import ThemeToggle from '../components/ThemeToggle';
import UserAvatar from '../images/VisualTONlogo.png';


function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-2455555555555555555555555 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            <img className="w-24 h-24 rounded-full" src={UserAvatar} width="32" height="32" alt="User" />
            <div className="font-bold text-slate-800 dark:text-slate-100 mt-5 text-5xl">VisualTON</div>          
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            <UserMenu align="right" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
