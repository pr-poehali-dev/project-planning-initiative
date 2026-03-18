export default function Featured() {
  const facts = [
    { num: "125M", label: "Population" },
    { num: "3,776M", label: "Mt. Fuji height" },
    { num: "1868", label: "Meiji Era began" },
    { num: "47", label: "Prefectures" },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
        <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
          <img
            src="/images/mountain-landscape.jpg"
            alt="Mountain landscape like Fuji"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
          <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Slide 2 — Why Japan?</h3>
          <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
            Japan is a place where ancient temples stand next to skyscrapers, and cherry blossoms fill the air every spring.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-4">
            {facts.map((f) => (
              <div key={f.num} className="border-t border-neutral-200 pt-4">
                <p className="text-3xl font-bold text-neutral-900">{f.num}</p>
                <p className="text-sm text-neutral-500 uppercase tracking-wide mt-1">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-neutral-50">
        <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0">
          <img
            src="/images/ai-startup.png"
            alt="Japanese culture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:ml-12">
          <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Slide 3 — What I Want to See</h3>
          <ul className="space-y-6">
            {[
              { title: "Mount Fuji", desc: "The highest mountain in Japan — 3,776 meters above sea level." },
              { title: "Tokyo Disneyland", desc: "One of the most visited theme parks in the world." },
              { title: "Kyoto Temples", desc: "Over 1,600 Buddhist temples and 400 Shinto shrines." },
              { title: "Japanese Cuisine", desc: "Sushi, ramen, takoyaki — real food, not the ones in school canteen." },
            ].map((item) => (
              <li key={item.title} className="flex gap-4 items-start">
                <span className="text-2xl font-bold text-neutral-200 leading-none select-none">→</span>
                <div>
                  <p className="text-lg font-bold text-neutral-900">{item.title}</p>
                  <p className="text-neutral-500 text-sm mt-1">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}