import React, { useState, useRef, useEffect } from 'react';
import { FileSpreadsheet, Unplug, AlertTriangle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndices(prev => {
              if (prev.includes(index)) return prev;
              return [...prev, index];
            });
          }
        });
      },
      { threshold: 0.4 } 
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const points = [
    {
      icon: FileSpreadsheet,
      title: "טביעה באקסלים והזנת נתונים",
      desc: "הצוות שלך מבזבז שעות יקרות על העתק-הדבק בין מערכות במקום להתמקד במכירות ובלקוחות."
    },
    {
      icon: Unplug,
      title: "מערכות מנותקות",
      desc: "ממשק ניהול הלקוחות לא מדבר עם הנהלת החשבונות, והלידים מהאתר לא מגיעים לטלפון. המידע הולך לאיבוד."
    },
    {
      icon: AlertTriangle,
      title: "טעויות אנוש יקרות",
      desc: "מספר טלפון שגוי, ליד שנשכח, או חיוב שלא יצא בזמן. טעויות קטנות שעולות לעסק אלפי שקלים."
    }
  ];

  return (
    <section id="pain-points" className="py-24 bg-brand-beige overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
            זה לא חייב להיות ככה
          </h2>
          <p className="text-brand-airforce max-w-2xl mx-auto text-lg font-medium">
            רוב העסקים מפסידים כסף כל יום בגלל תהליכים מיושנים. מזהים את עצמכם?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((item, idx) => {
            const isActive = activeIndices.includes(idx);
            return (
              <div 
                key={idx} 
                ref={el => { itemsRef.current[idx] = el; }}
                data-index={idx}
                className={`group p-8 rounded-2xl border transition-all duration-1000 ease-out relative overflow-hidden bg-white ${
                  isActive 
                    ? 'border-brand-ash/50 shadow-xl shadow-brand-teal/5 translate-y-0 opacity-100' 
                    : 'border-transparent translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-700 delay-300 ${
                  isActive ? 'bg-brand-ink text-white scale-100 rotate-0' : 'bg-brand-ash/20 text-brand-ink scale-75 -rotate-12'
                }`}>
                  <item.icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-brand-ink mb-3">{item.title}</h3>
                
                <div 
                  className={`grid transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isActive ? 'grid-rows-[1fr] opacity-100 translate-y-0' : 'grid-rows-[0fr] opacity-0 -translate-y-4'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-brand-airforce leading-relaxed pb-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};