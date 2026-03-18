import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4" style={{textShadow: "0 2px 20px rgba(0,0,0,0.7)"}}>
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-80">My Dream Trip</p>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6 leading-none">
          JAPAN
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto opacity-90 font-light">
          The Land of the Rising Sun
        </p>
        <div className="mt-8 flex justify-center gap-6 text-sm opacity-70 uppercase tracking-widest">
          <span>Tokyo</span>
          <span>·</span>
          <span>Kyoto</span>
          <span>·</span>
          <span>Osaka</span>
        </div>
      </div>
    </div>
  );
}