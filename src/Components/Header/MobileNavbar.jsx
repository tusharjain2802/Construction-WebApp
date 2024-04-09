import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

function MobileNavbar() {
    const [shadow, setShadow] = useState(false);

    const NavbarLinks = [
        {
            name: "Home",
            to: "hero",
        },
        {
            name: "Services",
            to: "services",
        },
        {
            name: "About",
            to: "about",
        },
        {
            name: "ContactUs",
            to: "contact",
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setShadow(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`flex justify-between fixed top-0 left-0 w-full z-10 transition duration-300 ease-in-out backdrop-blur-md ${shadow ? "shadow-lg" : ""
                }`}
        >
            <div className="flex px-6">
                <ul className="inline-flex items-center mr-16 space-x-8">
                    {NavbarLinks.map((link, key) => (
                        <li key={key}>
                            <ScrollLink
                                to={link.to}
                                smooth={true}
                                offset={-70}
                                className="px-4 py-2 font-poppins font-normal text-base leading-7"
                                activeClass="text-purple-600 underline"
                            >
                                {link.name}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default MobileNavbar;
