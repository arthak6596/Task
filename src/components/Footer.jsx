import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const resize = () => {
      setMobile(window.innerWidth < 720);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  
  const leJaoHome = () => {
    navigate('/');
  };
  
  const takeToHelp = () => {
    navigate('/contact-us');
  };
  
  const handleNavigation = (path) => {
    navigate(path, { state: { from: location.pathname } });
  };

  const takeToCareers = () => {
    navigate('/careers');
  };

  const takeToMarketting = () => {
    navigate('/marketing');
  };

  const takeToCookieManagement = () => {
    navigate('/cookie-management');
  };
 
  return (
    <footer className="bg-[#24262b] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-1">
            <ul className="space-y-2">
              <li><a onClick={leJaoHome} href="" className="hover:text-gray-300">Home</a></li>
              <li><a href="/about-us" className="hover:text-gray-300">About-Us</a></li>
              <li><a style={{cursor:'pointer'}} href="" className="hover:text-gray-300">blog</a></li>
              <li><a onClick={takeToHelp} href="" className="hover:text-gray-300">Contact-Us</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <ul className="space-y-2">
              <li><a href="" onClick={() => handleNavigation('/terms-of-service')} className="hover:text-gray-300">terms</a></li>
              <li><a href="#" className="hover:text-gray-300"></a></li>
              <li><a href="#" className="hover:text-gray-300"></a></li>
              <li><a href="#" className="hover:text-gray-300"></a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <ul className="space-y-2">
              <li><a onClick={takeToCookieManagement} href="" className="hover:text-gray-300">cookie-management</a></li>
              <li><a href="#" className="hover:text-gray-300"></a></li>
              <li><a href="#" className="hover:text-gray-300"></a></li>
              <li><a href="/impressium" className="hover:text-gray-300">impressium</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <ul className="space-y-2">
              <li><a onClick={(e) => {
                e.preventDefault();
                // takeToDocRegister();
              }} href="" className="hover:text-gray-300">List Your Practice</a></li>
              <li><a onClick={takeToMarketting} href="" className="hover:text-gray-300">vbnvfd</a></li>
              <li><a onClick={takeToCareers} href="" className="hover:text-gray-300">tyuio</a></li>
              <li><a href="" className="hover:text-gray-300">language</a></li>
            </ul>
          </div>
        </div>
              
        {mobile ? (
          <div className="mt-8 flex flex-col items-center">
            <div className="flex justify-center">
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/people/Arztme/61568272712289/?sk=about" className="text-white hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/arztme/profilecard/?igsh=azVleGhzeGpyanBr" className="text-white hover:text-gray-300"><i className="fab fa-instagram"></i></a>
                <a href="https://x.com/Arztme" className="text-white hover:text-gray-300"><i className="fab fa-twitter"></i></a>
                <a href="https://medium.com/@Arztme" className="text-white hover:text-gray-300"><i className="fab fa-medium"></i></a>
                <a href="https://www.linkedin.com/company/arztme/?viewAsMember=true" className="text-white hover:text-gray-300"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="https://www.youtube.com/@Arztme" className="text-white hover:text-gray-300"><i className="fab fa-youtube"></i></a>
              <a href="https://www.reddit.com/user/Inevitable-Art-9478/" className="text-white hover:text-gray-300"><i className="fab fa-reddit"></i></a>
              <a href="https://www.quora.com/profile/Arztme/posts" className="text-white hover:text-gray-300"><i className="fab fa-quora"></i></a>
              <a href="https://at.pinterest.com/doctorsalzburg" className="text-white hover:text-gray-300"><i className="fab fa-pinterest"></i></a>
            </div>
            <div className="mt-4 text-sm">
              qwerty
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <div className="w-1/4">
                <ul className="space-y-2">
                  <li><a href="" className="hover:text-gray-300">qwertyu</a></li>
                </ul>
              </div>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/people/Arztme/61568272712289/?sk=about" aria-label="facebook" className="text-white hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/arztme/profilecard/?igsh=azVleGhzeGpyanBr" aria-label="instagram" className="text-white hover:text-gray-300"><i className="fab fa-instagram"></i></a>
                <a href="https://x.com/Arztme" className="text-white hover:text-gray-300" aria-label="twitter"><i className="fab fa-twitter"></i></a>
                <a href="https://medium.com/@Arztme" className="text-white hover:text-gray-300" aria-label="medium"><i className="fab fa-medium"></i></a>
                <a href="https://www.linkedin.com/company/arztme/?viewAsMember=true" className="text-white hover:text-gray-300" aria-label="linkedin"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.youtube.com/@Arztme" className="text-white hover:text-gray-300" aria-label="youtube"><i className="fab fa-youtube"></i></a>
                <a href="https://www.reddit.com/user/Inevitable-Art-9478/" className="text-white hover:text-gray-300" aria-label="redddit"><i className="fab fa-reddit"></i></a>
                <a href="https://www.quora.com/profile/Arztme/posts" className="text-white hover:text-gray-300" aria-label="quora"><i className="fab fa-quora"></i></a>
                <a href="https://at.pinterest.com/doctorsalzburg" className="text-white hover:text-gray-300" aria-label="pinterest"><i className="fab fa-pinterest"></i></a>
              </div>
              <div className="w-1/4"></div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;