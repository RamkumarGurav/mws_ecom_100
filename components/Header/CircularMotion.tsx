// CircularMotion.js
"use client";
import { motion } from "framer-motion";
import img1 from "@/public/ram7.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

const CircularMotion = () => {
  // Define the radius of the circle
  const radius = 100;

  // Define the number of images
  const numImages = 6;

  // State to store the current tilt angle of each image
  const [tiltAngles, setTiltAngles] = useState(
    Array.from({ length: numImages }, () => 0)
  );

  // Calculate the angle step between each image
  const angleStep = (2 * Math.PI) / numImages;

  useEffect(() => {
    // Calculate tilt angle for each image based on its position
    const angles = Array.from({ length: numImages }, (_, index) => {
      const angle = (index * angleStep + Math.PI / 2) % (2 * Math.PI);
      return angle > Math.PI ? angle - 2 * Math.PI : angle;
    });
    setTiltAngles(angles);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="relative"
        style={{
          width: `${2 * radius}px`,
          height: `${2 * radius}px`,
        }}
        animate={{
          rotate: 360,
          transition: {
            loop: Infinity,
            ease: "linear",
            duration: 10, // Adjust duration as needed
          },
        }}
      >
        {tiltAngles.map((angle, index) => {
          // Calculate the position of each image around the circle
          const x = radius * Math.cos(index * angleStep);
          const y = radius * Math.sin(index * angleStep);

          return (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                x,
                y,
              }}
            >
              {/* Replace the placeholder image source with your actual image URLs */}
              {/* Adjust the image dimensions and styling as needed */}
              <div
                style={{
                  transform: `rotate(${angle}rad)`,
                }}
              >
                <Image
                  src={img1}
                  layout="fixed"
                  width={150}
                  height={150}
                  alt="photo"
                  className="rounded-full"
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
export default CircularMotion;
