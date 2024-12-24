import React from "react";
import "./Layout.css";
import logo from "./assets/images/logo.png"; // Replace with your logo path
import Ellispse from "./assets/images/Ellipse.png";
const Layout = () => {
  // Sidebar Menu Items
  const menuItems = [
    { name: "Projects", icon: "📁" },
    { name: "Assignments", icon: "📄" },
    { name: "Contacts", icon: "📞" },
    { name: "Contracts", icon: "📋" },
    { name: "Timesheets", icon: "⏱" },
    { name: "Employees", icon: "👥" },
    { name: "Announcements", icon: "📢" },
    { name: "User Management", icon: "🔧" },
    { name: "Company", icon: "🏢" },
    { name: "Recruitment", icon: "📝" },
  ];

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar" role="navigation" aria-label="Sidebar Navigation">
        <div className="sidebar-header">
          <img src={logo} alt="Elbert Technology Logo" className="sidebar-logo" />
          <button className="menu-icon" aria-label="Menu">
            ☰
          </button>
        </div>
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-text">{item.name}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header__right">
            <button className="icon-button" aria-label="Notifications">
              🔔
            </button>
            <button className="icon-button" aria-label="Refresh">
              ⟳
            </button>
            <div className="user-profile">
              
                <img src={Ellispse} alt="user-avatar Logo" className="user-avatar" />
            
              <span className="username">Username</span>
            </div>
          </div>
        </header>

        
      </div>
    </div>
  );
};

export default Layout;
