import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const AnimatedCounter = ({ from, to, duration = 2, suffix = "", prefix = "" }: { from: number, to: number, duration?: number, suffix?: string, prefix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      // Easing function (easeOutExpo)
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      if (nodeRef.current) {
        nodeRef.current.textContent = prefix + Math.floor(from + (to - from) * easeOut).toLocaleString() + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, from, to, duration, prefix, suffix]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {prefix}{from.toLocaleString()}{suffix}
    </span>
  );
};

interface MixernoCount {
  value: string;
  count: number;
}

interface Stat {
  label: string;
  description: string;
  type: 'counter' | 'text';
  value?: number;
  valueText?: string;
  prefix?: string;
  suffix?: string;
}

export function StatsSection() {
  const { t, language } = useLanguage();

  const [discordMembers, setDiscordMembers] = useState<number>(61704);
  const [youtubeSubs, setYoutubeSubs] = useState<number>(443000);
  const fbMembers = 130000;

  useEffect(() => {
    // Lấy số liệu Discord
    fetch('https://discord.com/api/v9/invites/sangtraan?with_counts=true')
      .then(res => res.json())
      .then(data => {
        if (data && data.approximate_member_count) {
          setDiscordMembers(data.approximate_member_count);
        }
      })
      .catch(console.error);

    // Lấy số liệu YouTube
    fetch('https://mixerno.space/api/youtube-channel-counter/user/UC3NPuQGUQ8HDPL2LtWPlHeA')
      .then(res => res.json())
      .then((data: { counts?: MixernoCount[] }) => {
        const subCount = data?.counts?.find((c) => c.value === 'subscribers')?.count;
        if (subCount) {
          setYoutubeSubs(subCount);
        }
      })
      .catch(console.error);
  }, []);

  const stats: Stat[] = [
    {
      label: "YouTube Subscribers (Live)",
      value: youtubeSubs,
      description: language === 'vi' ? "Cựu CEO Server Discord hỗ trợ trực tiếp cộng đồng của kênh Sangtraan" : "Former CEO of the Discord server directly supporting the Sangtraan channel community",
      type: "counter"
    },
    {
      label: "Discord Members (Live)",
      value: discordMembers,
      description: language === 'vi' ? "Vai trò: Senior Chief Executive Officer, Systems Tester & Developer, Community Administrator" : "Role: Senior Chief Executive Officer, Systems Tester & Developer, Community Administrator",
      type: "counter"
    },
    {
      label: "Facebook Followers",
      value: fbMembers,
      suffix: "+",
      description: language === 'vi' ? "Quản trị Fanpage tích xanh Coach Nguyễn Tú Oanh" : "Administrator of Coach Nguyen Tu Oanh's verified fanpage",
      type: "counter"
    },
    {
      label: t('stats.experience'),
      value: 10,
      prefix: "+",
      description: language === 'vi' ? "Năm kinh nghiệm thực chiến" : "Years of hands-on experience",
      type: "counter"
    },
    {
      label: t('stats.clients'),
      value: 500,
      prefix: "+",
      description: language === 'vi' ? "Khách hàng trên toàn cầu" : "Clients worldwide",
      type: "counter"
    },
    {
      label: language === 'vi' ? "Doanh Thu" : "Revenue",
      valueText: "$999 - $8999",
      description: language === 'vi' ? "Doanh thu trên 1 đơn hàng cao cấp" : "Revenue per premium engagement",
      type: "text"
    }
  ];

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-black to-black opacity-50" />
      
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16 border-t border-white/10 pt-16">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center px-4 group"
            >
              {stat.type === 'counter' ? (
                <div className="text-5xl lg:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-4 transition-transform duration-500 group-hover:scale-110">
                  <AnimatedCounter from={0} to={stat.value ?? 0} duration={2.5} prefix={stat.prefix ?? ""} suffix={stat.suffix ?? ""} />
                </div>
              ) : stat.type === 'text' ? (
                <div className="text-4xl lg:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-4 transition-transform duration-500 group-hover:scale-110">
                  {stat.valueText}
                </div>
              ) : null}
              
              <h3 className="text-xl font-medium text-white/90 mb-2 tracking-wide uppercase text-sm lg:text-base mt-4">
                {stat.label}
              </h3>
              <p className="text-[#A3A3A3] font-light max-w-xs text-sm lg:text-base">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
