import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <h3 className="absolute top-12 left-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        Slide 4 — Meme Break 🔥
      </h3>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 px-6">
        <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-lg text-center">
          <p className="text-white text-4xl font-black mb-3">MELLSTROY</p>
          <p className="text-white/80 text-lg">когда узнал, что в Японии есть аниме-кафе на каждом углу</p>
          <p className="text-yellow-400 text-5xl mt-4">👁️👄👁️</p>
        </div>
        <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-lg text-center">
          <p className="text-white/70 text-sm uppercase tracking-wide mb-2">Mellstroy after visiting Japan</p>
          <p className="text-white text-2xl font-bold">"я остаюсь. всё. прощайте."</p>
          <p className="text-white/50 text-sm mt-2">— probably Mellstroy, 2024</p>
        </div>
      </div>

      <p className="absolute bottom-8 right-6 text-white/60 text-base z-10 uppercase tracking-widest">
        Based on real events
      </p>
    </div>
  );
}