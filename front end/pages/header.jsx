import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CircleChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    if (token && email) {
      setIsAuthenticated(true);
      setUserEmail(email);
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    setUserEmail('');
    setUser(null);
    navigate('/');
  };

  const handleMouseEnter = () => setDropDown(true);
  const handleMouseLeave = () => setDropDown(false);

  const dropDownImages = [
    { title: "BEAST", image: "https://www.bullworkmobility.com/home_products/beast.webp" },
    { title: "VANAMA", image: "https://www.bullworkmobility.com/home_products/Vamana%20Pro.webp" },
    { title: "OX - 1 ", image: "https://www.bullworkmobility.com/home_products/ox.webp" },
    { title: "GLX E-LOADER", image: "https://www.bullworkmobility.com/home_products/GLX.webp" },
    { title: "WARRIOR", image: "https://www.bullworkmobility.com/home_products/Warrior.webp" },
  ];

  return (
    <header className="bg-black text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://www.bullworkmobility.com/images/logo.webp"
            alt="Bull Work Mobility"
            className="h-8 w-8 object-contain"
          />
          <h1 className="text-xl font-bold tracking-wide">BULL WORK MOBILITY</h1>
        </div>

        {/* Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-gray-300">HOME</Link>

          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative">
            <button className="flex items-center gap-1 hover:text-gray-300">
              PRODUCTS <CircleChevronDown className="h-5 w-5" />
            </button>

            {dropDown && (
              <div className="absolute mt-3 bg-white text-black shadow-xl border rounded-xl p-4 flex gap-4 z-50">
                {dropDownImages.map((product, idx) => (
                  <div key={idx} className="flex flex-col items-center hover:scale-105 transition">
                    <img src={product.image} alt={product.title} className="h-24 w-24 object-contain rounded-md mb-2" />
                    <span className="text-sm font-medium text-gray-800 text-center">{product.title}</span>
                    <a href="/products" className="text-[#A100B1] font-semibold hover:underline">Explore More →</a>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/technology" className="hover:text-gray-300">TECHNOLOGY</Link>
          <Link to="/about" className="hover:text-gray-300">ABOUT US</Link>
          <Link to="/careers" className="hover:text-gray-300">CAREERS</Link>
          <Link
            to="/orders"
            className="bg-gradient-to-l to-[#A100B1] from-[#57115E] px-4 py-1.5 rounded-md text-white font-semibold hover:opacity-90"
          >
            ORDER
          </Link>

          {isAuthenticated ? (
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold">
                  {userEmail[0]?.toUpperCase()}
                </div>
              </div>

              <div className="absolute top-10 right-0 bg-white text-black shadow-lg rounded-md p-4 min-w-[200px] hidden group-hover:block z-50">
                <p className="font-medium mb-2">Logged in as:</p>
                <p className="text-sm text-gray-700 mb-4 truncate">{userEmail}</p>
                <button
                  onClick={handleLogout}
                  className="w-full bg-purple-600 hover:bg-red-700 text-white py-1.5 px-3 rounded-md transition"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="inline-block border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black"
            >
              LOGIN
            </button>
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          <Link to="/" className="block hover:text-gray-300">HOME</Link>
          <div className="space-y-2">
            <span className="block font-semibold">PRODUCTS</span>
            {dropDownImages.map((product, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <img src={product.image} alt={product.title} className="h-12 w-12 object-contain rounded" />
                <div>
                  <div className="text-sm font-medium text-gray-200">{product.title}</div>
                  <a href="/products" className="text-[#A100B1] text-sm hover:underline">Explore More →</a>
                </div>
              </div>
            ))}
          </div>
          <Link to="/technology" className="block hover:text-gray-300">TECHNOLOGY</Link>
          <Link to="/about" className="block hover:text-gray-300">ABOUT US</Link>
          <Link to="/careers" className="block hover:text-gray-300">CAREERS</Link>
          <Link
            to="/orders"
            className="inline-block bg-gradient-to-l to-[#A100B1] from-[#57115E] px-6 py-2 rounded-md hover:opacity-90"
          >
            ORDER
          </Link>

          {isAuthenticated ? (
            <div className="bg-white text-black rounded-md p-4 space-y-2 shadow-md">
              <p className="text-sm font-semibold">Logged in as:</p>
              <p className="text-sm truncate">{userEmail}</p>
              <button
                onClick={handleLogout}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-1.5 px-3 rounded-md transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="inline-block border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black"
            >
              LOGIN
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
