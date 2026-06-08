import { motion } from 'framer-motion';

const gifs = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif"
];

// Duplicate for seamless loop
const scrollContent = [...gifs, ...gifs];

export function InfiniteMarquee() {
  return (
    <section className="w-full mt-16 md:mt-20 mb-16 overflow-hidden bg-black py-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex"
      >
        <div className="flex animate-marquee w-max">
          {scrollContent.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Project preview"
              className="h-[280px] md:h-[400px] lg:h-[500px] w-auto aspect-[4/3] md:aspect-video object-cover mx-3 rounded-2xl shadow-lg border border-white/5"
              loading="lazy"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
