import { useState } from 'react';
import { FaFacebook, FaLinkedin, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function BottomNavBar() {
  const [activeIcon, setActiveIcon] = useState('');


  const mouseEnter = (name) => {
    setActiveIcon(name === activeIcon ? '' : name);
  };

  const socialIcons = [
    {  name: 'Facebook', icon: <FaFacebook size={25} color={activeIcon === 'Facebook' ? '#3a86ff' : 'white'} /> },
    {  name: 'WhatsApp', icon: <FaWhatsapp size={25} color={activeIcon === 'WhatsApp' ? 'green' : 'white'} /> },
    {  name: 'Instagram', icon: <FaInstagram size={25} color={activeIcon === 'Instagram' ? 'purple' : 'white'} /> },
    {  name: 'Twitter', icon: <FaTwitter size={25} color={activeIcon === 'Twitter' ? 'cyan' : 'white'} /> },
    {  name: 'LinkedIn', icon: <FaLinkedin size={25} color={activeIcon === 'LinkedIn' ? '#3a86ff' : 'white'} /> },
  ];

  return (
    <>
      <div className='w-[100%] h-[100vh] bg-gray-900 flex justify-center items-center'>
        <div className='flex space-x-5'>
          {socialIcons.map((item, ind) => {
            const isActiveIcon = item.name === activeIcon;
            return (
              <div key={ind} className='flex text-white space-x-2 cursor-pointer' onMouseEnter={()=> mouseEnter(item.name)}>
                <a href='#' className='transition duration-700 ease-in-out'>{item.icon}</a>
                <p className={`${isActiveIcon ? 'transition duration-700 ease-in-out' : 'hidden'}`}>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
