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

      <div className="absolute inset-0 bg-black/50 z-10" />

      <h3 className="absolute top-12 left-6 text-white uppercase z-20 text-sm md:text-base tracking-widest opacity-70">
        Slide 4 — Japan: Interesting Facts
      </h3>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6">
        <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-10 text-center">
          Did You Know?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl w-full">
          {[
            { icon: "🏯", title: "Ancient History", text: "Japan has been inhabited for over 30,000 years. The first emperor, Jimmu, is said to have founded the nation in 660 BC." },
            { icon: "🚄", title: "Bullet Trains", text: "The Shinkansen travels at up to 320 km/h and has carried over 10 billion passengers with almost zero accidents." },
            { icon: "🍜", title: "Food Culture", text: "Japan has more Michelin-starred restaurants than any other country in the world — over 400 in Tokyo alone." },
            { icon: "🌸", title: "Cherry Blossoms", text: "Sakura season lasts only 2 weeks. Japanese people celebrate it with 'Hanami' — outdoor picnics under the trees." },
          ].map((item) => (
            <div key={item.title} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5">
              <p className="text-3xl mb-2">{item.icon}</p>
              <p className="text-white font-bold text-lg mb-1">{item.title}</p>
              <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}