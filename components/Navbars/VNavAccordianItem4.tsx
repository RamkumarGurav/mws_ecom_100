"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

interface Props {
  title: string;
  titleLink?: string;
  subLinks?: { name: string; link: string }[];
  isAccordian?: boolean;
  isOpen?: boolean;
  mainIcon?: React.ReactNode;
  subIcon?: React.ReactNode;
  pathName: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
export default function VNavAccordianItem4({
  title,
  titleLink = "",
  subLinks = [],
  isAccordian = false,
  isOpen,
  onClick,
  mainIcon,
  subIcon,
  pathName,
  children,
}: Props) {
  const [isActive, setIsActive] = useState<any>("");

  useEffect(() => {
    if (isAccordian) {
      let activeSubLink = subLinks.find((item) => pathName === item.link);
      setIsActive(activeSubLink ? activeSubLink.link : "");
    } else {
      setIsActive(pathName === titleLink ? titleLink : "");
    }
  }, [pathName, subLinks, titleLink]);
  return (
    <>
      {isAccordian ? (
        <div
          className={`w-full  |||   select-none  text-xgray text-base 
      
   |||  ${
     isOpen
       ? "border-l-4 border-l-xbcolor1 text-xbcolor1"
       : "border-l-4 border-l-transparent"
   } 
   `}
        >
          <div
            className={`group ||| accordianTitleContainer   ||| 
             w-full px-4 py-[12px] ||| cursor-pointer  |||    
             ||| relative flex gap-x-2 items-center 

             
        
             
            
               
              
               `}
            onClick={onClick}
          >
            <div
              className={`  |||   flex items-center  ||| font-semibold  select-none   font-sans    
              ||| `}
            >
              {mainIcon && <span className={`mr-2`}>{mainIcon}</span>}
              <span>{title}</span>
            </div>
            <FaChevronRight
              size={16}
              className={`  ease-in-out transition-transform transform duration-500  ${
                isOpen ? "rotate-90 text-inherit" : ""
              } `}
            />
          </div>
          <div
            className={`accordianItemContainer ||| relative |||   |||  overflow-hidden  w-full 
             |||   `}
          >
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "100%" }}
                  exit={{ opacity: 0.5, height: 0 }}
                  transition={{ type: "tween", duration: 0.4 }}
                  className={` w-full |||   flex flex-col font-sans `}
                >
                  {subLinks.map((item: { [key: string]: any }, i: number) => {
                    return (
                      <Link
                        href={item.link}
                        className={` pl-5 pb-[6px]
                        ${isActive == item.link ? "text-xbcolor1 " : ""}
                       mb-1 ||| group |||   font-sans  font-medium  select-none ||| flex items-center   
                    ||| border border-transparent rounded   ||| hover:text-xbcolor1
                      `}
                        key={i}
                      >
                        {subIcon && <span className={`mr-2`}>{subIcon}</span>}
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <Link
          href={titleLink}
          className={`  
        ${
          isActive == titleLink
            ? " text-xbcolor1 border-l-4 border-xbcolor1"
            : ""
        }
        |||   flex items-center  ||| font-semibold  select-none   font-sans    
            ||| px-4 py-[12px]`}
        >
          {mainIcon && <span className={`mr-2`}>{mainIcon}</span>}
          <span>{title}</span>
        </Link>
      )}
    </>
  );
}
