import Image from "next/image";
import Logo from "../assets/newprofile-pic.png";
import LinkedIn from "../assets/linkedin-logo.png"
import Link from "next/link";


const footernavigation = [
    { name: 'Home', href: '#'},
    { name: 'About', href: '#'},
    { name: 'Contact', href: '#'},
    { name: 'Blog', href: '#'},
  ]

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-black-300 text-white-900 -mx-8 -mb-8">
      <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
        <div className="flex items-center justify-center flex-col px-8">
          <div className="flex items-center justify-center md:justify-start">
                <Image 
                    src={Logo} 
                    objectPosition="hover"
                    alt="placeholder-logo"
                    width={40}
                    height={40}
                    className="w-8"
                    />                
                <div className="h5 ml-2 text-2xl font-black tracking-wider">
                    Nathaniel Waldman
                </div>
          </div>
          <div className="mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row">
            {footernavigation.map((item) =>(
                <a 
                    key={item.name}
                    href={item.href}
                    className="border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4">
                {item.name}
                </a>
            ))}
          </div>
          <div className="mt-10">
            
            <Link href= "https://www.linkedin.com/in/nathanielwaldman/">
                <Image 
                    src={LinkedIn} 
                    objectPosition="hover"
                    alt="facebook"
                    width={40}
                    height={40}
                    className="px-10"
                    />
            </Link>
          </div>
          <div className="text-center mt-10 font-medium tracking-wide text-sm text-gray-600">
            &copy; Copyright 2022, Z2H Inc. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
