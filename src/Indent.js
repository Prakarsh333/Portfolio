
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg">My Website</div>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring"
          >
            Menu
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
              <a
                href="#"
                onClick={closeDropdown}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Link 1
              </a>
              <a
                href="#"
                onClick={closeDropdown}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Link 2
              </a>
              <a
                href="#"
                onClick={closeDropdown}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Link 3
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
