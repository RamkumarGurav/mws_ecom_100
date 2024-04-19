"use client";
import FooterBottom from "@/components/Footer/FooterBottom";
import { MdAccountCircle } from "react-icons/md";
import { IoLogoVercel } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import { SiPreact } from "react-icons/si";
import { IoLogoWebComponent } from "react-icons/io5";
import { RiDashboard3Fill } from "react-icons/ri";
import { AiFillProfile } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { TiMinus } from "react-icons/ti";
import { RxDashboard } from "react-icons/rx";
import React, { useState, useEffect, useRef, MouseEvent } from "react";
import { GoPeople } from "react-icons/go";
import VNavAccordianItem4 from "./VNavAccordianItem4";
import { motion } from "framer-motion";
import { Avatar, Button, Divider } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
let navLinks = {
  dashboard: {
    name: "Dashboard",
    link: "/admin/dashboard",
  },
  bio: {
    name: "Catalog",
    dropDown: [
      {
        name: "Products",
        link: "/admin/products",
      },
      {
        name: "Categories",
        link: "/admin/categories",
      },
      {
        name: "Attributes",
        link: "/admin/attributes",
      },
      {
        name: "Coupons",
        link: "/admin/coupons",
      },
    ],
  },
};

export default function DashNavbar2({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  /* =======================================================================
       USESTATES AND REFS
   ======================================================================= */
  const [user, setUser] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [activeNavLinkName, setActiveNavLinkName] = useState<null | string>(
    null
  );
  const [isSticky, setIsSticky] = useState(false);
  const mainNavBarRef = useRef<HTMLDivElement>(null);
  //==]

  /* =======================================================================
         SETTING ACTIVENAVLINK NAME
    ======================================================================= */
  const handlePanelClick = (name: string) => {
    setActiveNavLinkName((prevIndex) => (prevIndex === name ? null : name));
  };
  //==]

  /* =======================================================================
        TOGGLINING SIDEBAR
    ======================================================================= */
  const toggleSidebar = (e: any) => {
    e.stopPropagation();
    setIsSidebarOpen(!isSidebarOpen);
  };
  //==]

  /* =======================================================================
         MAKING NABAR STICKY
    ======================================================================= */
  useEffect(() => {
    if (!mainNavBarRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([event]) => setIsSticky(event.intersectionRatio < 1),
      { threshold: [1], rootMargin: "-1px 0px 0px 0px" }
    );
    observer.observe(mainNavBarRef.current);

    return () => observer.disconnect();
  }, []);
  //==]

  /* =======================================================================
         SIDEBAR CLOSES AFTER CLICKING OUTSIDE OF SIDEBAR
    ======================================================================= */
  // Function to handle clicks outside the sidebar
  const handleOutsideClick = (e: any) => {
    // Get sidebar and hamburger button elements by their IDs
    const sidebar = document.getElementById("sidebar");
    const hamBtn = document.getElementById("hamBtn");

    // Check if sidebar and hamburger button elements exist, and if the clicked target is outside them
    if (
      sidebar &&
      hamBtn &&
      !sidebar.contains(e.target as Node) && // Check if the clicked target is not inside the sidebar
      !hamBtn.contains(e.target as Node) // Check if the clicked target is not the hamburger button
    ) {
      // If the clicked target is outside both the sidebar and the hamburger button, close the sidebar
      setIsSidebarOpen(false); // Set the state to close the sidebar
    }
  };

  // Effect hook to add and remove click event listener for handling clicks outside the sidebar
  useEffect(() => {
    // Add click event listener to the entire document, to handle clicks anywhere on the page
    document.addEventListener("click", handleOutsideClick);
    // Clean up function to remove the click event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleOutsideClick); // Remove the click event listener
    };
  }, []); // Empty dependency array means this effect will run only once, after the component is mounted
  //==]

  /* =======================================================================
         SETTING USER
    ======================================================================= */
  useEffect(() => {
    setUser({ name: "Ramkumar", email: "ramkumar@gmail" });
  }, []);
  //==]

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div
      className={`DASHBOARD_CONT  |||  flex  items-stretch  |||   |||  w-full  ||| bg-[#F4F6F9] `}
    >
      <motion.div
        initial={{ opacity: 0, minWidth: 0 }}
        animate={{ opacity: 1, minWidth: isSidebarOpen ? "250px" : "0" }}
        exit={{ opacity: 0.5, minWidth: 0 }}
        transition={{ type: "tween", duration: 0.4 }}
        className={`SIDEBAR_CONT relative   ||| bg-white  ||| min-h-full     border-r-[1px] border-r-gray-300   `}
      >
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: !isSidebarOpen ? "-300px" : "0" }}
          exit={{ opacity: 0.5, x: 0 }}
          transition={{ type: "tween", duration: 0.4 }}
          className={` z-[1000] ||| fixed  top-0   |||  overflow-y-auto |||  w-[250px] h-screen  |||
            text-xgray  ||| ${!isSidebarOpen && "hidden"} ||| `}
        >
          <div
            className="p-4 py-1 min-h-[58px]   ||| flex items-center gap-2 
          |||  border-b border-b-gray-300
           ||| font-semibold
          "
          >
            <IoLogoWebComponent size={35} />
            <p>PORTFOLIO </p>
          </div>
          <div className="p-4  ||| flex items-center gap-2  |||  border-b border-b-gray-300">
            <MdAccountCircle size={35} />
            <p>Ramkumar</p>
          </div>
          <div className={`sidebarShell  |||  p-4 px-0 |||  w-full  `}>
            <VNavAccordianItem4
              mainIcon={<RxDashboard size={20} />}
              isAccordian={false}
              title={navLinks.dashboard.name}
              titleLink={navLinks.dashboard.link}
              pathName={pathName}
            />
            <VNavAccordianItem4
              mainIcon={<AiFillProfile size={20} />}
              subIcon={<TiMinus />}
              isAccordian={true}
              title={navLinks.bio.name}
              subLinks={navLinks.bio.dropDown}
              onClick={() => handlePanelClick(navLinks.bio.name)}
              isOpen={activeNavLinkName === navLinks.bio.name}
              pathName={pathName}
            />
            <VNavAccordianItem4
              mainIcon={<RxDashboard size={20} />}
              isAccordian={false}
              title={navLinks.dashboard.name}
              titleLink={navLinks.dashboard.link}
              pathName={pathName}
            />
          </div>
        </motion.div>
      </motion.div>
      <div className={`MAIN min-h-[100vh] flex flex-col   grow`}>
        <section className={`bg-[#fff] text-gray-900  ||| shadow   |||  `}>
          <div
            className={`min-h-[57px] px-4 py-0 mx-auto ||| flex justify-between items-stretch `}
          >
            <div className="NAV_RIGHT flex items-center gap-8">
              {/* ======== HAM-BUTTOM =====*/}
              <FiMenu
                size={20}
                onClick={toggleSidebar}
                className={`cursor-pointer`}
              />
              <Link href="/admin/dashboard">Home</Link>
              <Link href="/admin/dashboard">Contact</Link>
              {user ? (
                <Button
                  colorScheme="blue"
                  className={`!bg-xblue !font-thin hover:!bg-blue-700`}
                  size="sm"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  colorScheme="blue"
                  className={`!bg-xblue !font-thin hover:!bg-blue-700`}
                  size="sm"
                >
                  <Link href="/login"> Login</Link>
                </Button>
              )}
            </div>
            <div className="NAV_RIGHT flex items-center gap-4"></div>
          </div>
        </section>
        <main>{children}</main>

        <footer className={` min-w-full  mt-auto`}>
          <FooterBottom />
        </footer>
      </div>
    </div>
  );
}
