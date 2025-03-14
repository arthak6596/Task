import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const [Mobile, setMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const Resize = () => {
      setMobile(window.innerWidth < 720);
    }
    Resize();
    window.addEventListener('resize', Resize);
    return () => window.removeEventListener('resize', Resize);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const leJaoHome = () => {
    navigate('/');
  };
  const TakeToHelp = () => {
    navigate('/contact-us');
  }
  
  const handleNavigation = (path) => {
    navigate(path, { state: { from: location.pathname } });
  }

  const takeToCareers = () => {
    navigate('/careers');
  }

  const takeToMarketting = () => {
    navigate('/marketing');
  }

  const takeToCookieManagement = () => {
    navigate('/cookie-management');
  }
 
  return (
    <footer className="bg-[#24262b] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* First Column */}
          <div className="footer-col">
            <ul className="list-none">
              <li className="py-4 md:py-4 xl:pl-14 2xl:pl-14">
                <a onClick={leJaoHome} href="" className="text-base md:text-base text-gray-400 font-light block transition-all duration-300 ease-in-out hover:text-white hover:pl-2 break-words">
                 Home
                </a>
              </li>
              <li className="py-4 md:py-4 xl:pl-14 2xl:pl-14">
                <a href="/about-us" className="text-base md:text-base text-gray-400 font-light block transition-all duration-300 ease-in-out hover:text-white hover:pl-2 break-words">
                About Us
                </a>
              </li>
              <li className="py-4 md:py-4 xl:pl-14 2xl:pl-14">
                <a style={{cursor:'pointer'}} href="" className="text-base md:text-base text-gray-400 font-light block transition-all duration-300 ease-in-out hover:text-white hover:pl-2 break-words">
                Blog
                </a>
              </li>
              <li className="py-4 md:py-4 xl:pl-14 2xl:pl-14">
                <a onClick={TakeToHelp} href="" className="text-base md:text-base text-gray-400 font-light block transition-all duration-300 ease-in-out hover:text-white hover:pl-2 break-words">
                Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Second Column */}
          <div className="footer-col">
            <ul className="list-none">
              <li className="py-4 md:py-4 xl:pl-14 2xl:pl-14">
                <a href="" onClick={()=>handleNavigation('/terms-of-service')} className="text-base md:text-base text-gray-400 font-light block transition-all duration-300 ease-in-out hover:text-white hover:pl-2 break-words">
                General Terms & Conditions
                </a>
              </li>
              <li className="py-4 md:py-4 xl:pl-14 2xl:pl-14">
                <a href="#" className="text-base md:text-base text-gray-400 font-light block transition-all duration-300 ease-in-out hover:text-white hover:pl-2 break-words">
                Terms of use of Website
                </a>
              </li>
              <li className="py-4 md:py-4 xl:pl-14 2xl:pl-14">
                <a href="#" className="text-base md:text-base text-gray-400 font-light block transition-all duration-300 ease-in-out hover:text-white hover:pl-2 break-words">
                Personal data protection policy
                </a>
              </li>
              <li className="py-4 md:py-4 xl:pl-14 2xl:pl-14">
                <a href="#" className="text-base md:text-base text-gray-400 font-light block transition-all duration-300 ease-in-out hover:text-white hover:pl-2 break-words">
                Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Third Column */}
          <div className="footer-col">
            <ul className="list-none">
              <li className="py-4 md:py-4 xl:pl-14 2xl:pl-14">
                <a onClick={takeToCookieManagement} href="" className="text-base md:text-base text-gray-400 font-light block transition-all duration-300 ease-in-out hover:text-white hover:pl-2 break-words">
                Cookie management
                </a>
              </li>
              <li className="py-4 md:py-4 xl:pl-14 2xl:pl-14">
                <a href="#" className="text-base md:text-base text-gray-400 font-light block transition-all duration-300 ease-in-out hover:text-white hover:pl-2 break-words">
                Legal Notice
                </a>
              </li>
              <li className="py-4 md:py-4 xl:pl-14 2xl:pl-14">
                <a href="#" className="text-base md:text-base text-gray-400 font-light block transition-all duration-300 ease-in-out hover:text-white hover:pl-2 break-words">
                Signal illicit content
                </a>
              </li>
              <li className="py-4 md:py-4 xl:pl-14 2xl:pl-14">
                <a href="/impressium" className="text-base md:text-base text-gray-400 font-light block transition-all duration-300 ease-in-out hover:text-white hover:pl-2 break-words">
                IMPRESSIUM
                </a>
              </li>
            </ul>
          </div>
          
          {/* Fourth Column */}
          <div className="footer-col">
            <ul className="list-none">
              <li className="py-4 md:py-4 xl:pl-14 2xl:pl-14">
                <a onClick = {(e) => {
                  e.preventDefault();
                  
                }} href='' className="text-base md:text-base text-gray-400 font-light block transition-all duration-300 ease-in-out hover:text-white hover:pl-2 break-words">
                  List your practice on Artzme
                </a>
              </li>
              <li className="py-4 md:py-4 xl:pl-14 2xl:pl-14">
                <a onClick={takeToMarketting} href='' className="text-base md:text-base text-gray-400 font-light block transition-all duration-300 ease-in-out hover:text-white hover:pl-2 break-words">
                Marketing for your Practice
                </a>
              </li>
              <li className="py-4 md:py-4 xl:pl-14 2xl:pl-14">
                <a onClick={takeToCareers} href='' className="text-base md:text-base text-gray-400 font-light block transition-all duration-300 ease-in-out hover:text-white hover:pl-2 break-words">
                Careers
                </a>
              </li>
              <li className="py-4 md:py-4 xl:pl-14 2xl:pl-14">
                
                  <a  href="" className="text-base md:text-base text-gray-400 font-light block transition-all duration-300 ease-in-out hover:text-white hover:pl-2 break-words">
                  Careers
                  </a>
                
                 
              </li>
            </ul>
          </div>
        </div>
              
       
        {Mobile ? (
  <div className="mt-8 flex flex-col items-center">
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center">
        <a href="https://www.facebook.com/people/Arztme/61568272712289/?sk=about" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/arztme/profilecard/?igsh=azVleGhzeGpyanBr" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://x.com/Arztme" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://medium.com/@Arztme" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
          <i className="fab fa-medium"></i>
        </a>
        <a href="https://www.linkedin.com/company/arztme/?viewAsMember=true" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center">
        <a href="https://www.youtube.com/@Arztme" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://www.reddit.com/user/Inevitable-Art-9478/" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
          <i className="fab fa-reddit"></i>
        </a>
        <a href="https://www.quora.com/profile/Arztme/posts" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
          <i className="fab fa-quora"></i>
        </a>
        <a href="https://at.pinterest.com/doctorsalzburg" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
          <i className="fab fa-pinterest"></i>
        </a>
      </div>
    </div>
    <div className="mt-4 text-sm">
    © 2025 Arztme GmbH, Alle Rechte vorbehalten
    </div>
  </div>
) : (
  <div className="mt-8">
    <div className="flex justify-between items-center">
      <div className="w-1/4">
        <ul className="list-none">
          <li>
            <a href="" className="text-base text-gray-400 font-light block transition-all duration-300 ease-in-out hover:text-white hover:pl-2 break-words">
            © 2025 Arztme GmbH, Alle Rechte vorbehalten
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-shrink-0">
        <div className="flex justify-center">
          <a href="https://www.facebook.com/people/Arztme/61568272712289/?sk=about" aria-label="facebook" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/arztme/profilecard/?igsh=azVleGhzeGpyanBr" aria-label="instagram" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://x.com/Arztme" aria-label="twitter" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://medium.com/@Arztme" aria-label="medium" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
            <i className="fab fa-medium"></i>
          </a>
          <a href="https://www.linkedin.com/company/arztme/?viewAsMember=true" aria-label="linkedin" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.youtube.com/@Arztme" aria-label="youtube" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.reddit.com/user/Inevitable-Art-9478/" aria-label="reddit" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
            <i className="fab fa-reddit"></i>
          </a>
          <a href="https://www.quora.com/profile/Arztme/posts" aria-label="quora" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
            <i className="fab fa-quora"></i>
          </a>
          <a href="https://at.pinterest.com/doctorsalzburg" aria-label="pinterest" className="inline-block h-10 w-10 bg-white bg-opacity-20 mx-2 mb-2 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
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
