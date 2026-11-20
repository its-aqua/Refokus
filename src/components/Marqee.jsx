import { motion } from "motion/react";
const Marqee = ({ imgurl, direction }) => {
  return (
    <div className="w-full flex overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        className="flex py-5 gap-16 pr-12 shrink-0 whitespace-nowrap"
      >
        {imgurl.map((url, index) => (
          <img key={index} src={url} className="h-7" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        className="flex py-5 gap-16 shrink-0 pr-12 whitespace-nowrap"
      >
        {imgurl.map((url, index) => (
          <img key={index} src={url} className="h-7" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marqee;
