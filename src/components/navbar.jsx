import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/dvlogo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#87ab9500] text-white' >
        <div><Link to="home" smooth={true} offset={50} duration={500}>
            <img src={Logo} alt="Logo" style={{width: '190px'}} /></Link>
        </div>

        {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                <Link to="home" smooth={true} offset={50} duration={500}>
                Home
                </Link>
                </li>
                <li>                
                <Link to="about" smooth={true} offset={50} duration={500}>
                About
                </Link>
                </li>
                <li>
                <Link to="skills" smooth={true} offset={50} duration={500}>
                Skills
                </Link>
                </li>
                <li>
                <Link to="work" smooth={true} offset={50} duration={500}>
                Work
                </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} offset={50} duration={500}>
                Contact
                </Link>
                </li>
            </ul>

            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>           
                <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
                Home
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
                About
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
                Skills
                </Link>
                </li>
                <li onClick={handleClick} className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500}>
                Work
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
                Contact
                </Link>
                </li>
            </ul>

            {/* social */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#363535be]'>
                        <a className='flex justify-between items-center w-full text-white' 
                        href='https://github.com/daniel-valean' target="_blank">
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a55e32b8]'>
                        <a className='flex justify-between items-center w-full text-white' 
                        href=''><Link to="contact" smooth={true} offset={50} duration={500}>
                            Email </Link><HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#557a95ae]'>
                        <a className='flex justify-between items-center w-full text-white' href="http://www.linkedin.com/in/daniel-valean" target="_blank">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red bg-[#b1a296ab]'>
                        <a className='flex justify-between items-center w-full text-white' 
                        href='/'>
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>

                </ul>
            </div>
    </div>
  )
}

export default Navbar