import { motion } from "motion/react";

import Product from "./Product";
import { useState } from "react";
import Vid1 from "../assets/videos/vid1.mp4";
import Vid2 from "../assets/videos/vid2.mp4";
import Vid3 from "../assets/videos/vid3.mp4";
import Vid4 from "../assets/videos/vid4.mp4";
import Vid5 from "../assets/videos/vid5.mp4";

const Products = () => {
  const products = [
    {
      title: "Stripe",
      description:
        "Financial infrastructure for the internet, powering payments and online business operations worldwide.",
      live: true,
      case: false,
    },
    {
      title: "Linear",
      description:
        "Streamlined issue tracking and project planning tool built specifically for high-performance software teams.",
      live: true,
      case: false,
    },
    {
      title: "Vercel",
      description:
        "Platform for frontend developers, providing the speed and reliability to deploy modern web applications.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Innovative digital agency specializing in immersive web experiences and cutting-edge brand designs.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "Open-source backend alternative providing real-time database, authentication, and instant API generation.",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState();
  const mover = (val) => {
    setPos(val * 20);
  };
  return (
    <div className="mt-24 relative">
      {products.map((elem, index) => (
        <Product key={index} data={elem} mover={mover} count={index} />
      ))}
      <div className="w-full h-full overflow-hidden top-0 rounded-2xl absolute pointer-events-none">
        <motion.div
          initial={{ y: pos }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          animate={{ y: pos + `rem` }}
          className="window w-[26rem] absolute left-3/12 overflow-hidden rounded-2xl bg-white h-[20rem]"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window w-full bg-sky-100 h-full"
          >
            <video
              src={Vid2}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-screen overflow-hidden rounded-2xl object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window w-full bg-sky-300 rounded-2xl h-full"
          >
            <video
              src={Vid5}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-screen overflow-hidden rounded-2xl object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window w-full rounded-2xl bg-sky-400 h-full"
          >
            <video
              src={Vid3}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-screen overflow-hidden rounded-2xl object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window w-full rounded-2xl bg-sky-500 h-full"
          >
            <video
              src={Vid4}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-screen overflow-hidden rounded-2xl object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window w-full rounded-2xl bg-sky-600 h-full"
          >
            <video
              src={Vid1}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-screen overflow-hidden rounded-2xl object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
