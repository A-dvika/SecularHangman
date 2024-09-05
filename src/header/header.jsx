import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUsers,
  faHome,
  faUserCircle,
  faNewspaper,
  faSignOutAlt,
  faMoneyBillAlt,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <header className="bg-blue-900 p-6 flex justify-between items-center">
        {/* Hamburger Icon */}
        <div>
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "white", cursor: "pointer" }}
            onClick={handleMenuToggle}
          />
        </div>

        {/* Logo or Home Link */}
        <Link to="/" className="text-white mx-2">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
          Logout
        </Link>
      </header>

      {/* Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-40"
          onClick={handleMenuClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`bg-blue-900 text-white h-full w-56 fixed top-0 left-0 z-50 ${
          isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <div className="p-6">
          <h1 className="text-xl font-bold mb-4">Menu</h1>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  onClick={handleMenuClose}
                >
                  <FontAwesomeIcon icon={faHome} className="mr-3" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="flex items-center py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  onClick={handleMenuClose}
                >
                  <FontAwesomeIcon icon={faUserCircle} className="mr-3" />
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/juniors"
                  className="flex items-center py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  onClick={handleMenuClose}
                >
                  <FontAwesomeIcon icon={faUsers} className="mr-3" />
                  Junior Scholar
                </Link>
              </li>
              <li>
                <Link
                  to="/seniors"
                  className="flex items-center py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  onClick={handleMenuClose}
                >
                  <FontAwesomeIcon icon={faUsers} className="mr-3" />
                  Financial Mastery
                </Link>
              </li>
              <li>
                <Link
                  to="/forum"
                  className="flex items-center py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  onClick={handleMenuClose}
                >
                  <FontAwesomeIcon icon={faUsers} className="mr-3" />
                  Community Forum
                </Link>
              </li>
              <li>
                <Link
                  to="/bot"
                  className="flex items-center py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  onClick={handleMenuClose}
                >
                  <FontAwesomeIcon icon={faMoneyBillAlt} className="mr-3" />
                  Financial Health Assessment Bot
                </Link>
              </li>
              <li>
                <Link
                  to="/tracker"
                  className="flex items-center py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  onClick={handleMenuClose}
                >
                  <FontAwesomeIcon icon={faNewspaper} className="mr-3" />
                  Budget Tracker
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="flex items-center py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  onClick={handleMenuClose}
                >
                  <FontAwesomeIcon icon={faNewspaper} className="mr-3" />
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/calculate"
                  className="flex items-center py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  onClick={handleMenuClose}
                >
                  <FontAwesomeIcon icon={faCalculator} className="mr-3" />
                  Financial Calculator
                </Link>
              </li>
              {/* Add more navigation links as needed */}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Header;
