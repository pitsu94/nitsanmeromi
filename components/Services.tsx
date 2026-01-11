import React, { useState, useRef, useEffect } from 'react';
import { Workflow, Bot, LayoutDashboard } from 'lucide-react';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
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

  const services: ServiceItem[] = [
    {
      id: 'automation',
      title: 'אוטומציה עסקית',
      description: 'אוטומציה מלאה לתהליכי ליבה: יצירת הצעות מחיר, קליטת לידים, הפקת חשבוניות, מעקב לקוחות וניהול מלאי. הכל קורה אוטומטית ברקע.',
      icon: Workflow
    },
    {
      id: 'ai',
      title: 'סוכני AI חכמים',
      description: 'סוכני שירות מבוססי AI שיודעים לענות ללקוחות 24/7, לתאם פגישות ולסכם שיחות, תוך שיפור מתמיד של חווית השירות.',
      icon: Bot
    },
    {
      id: 'crm',
      title: 'מערכות ניהול ודשבורדים',
      description: 'ריכוז כל המידע העסקי במקום אחד נגיש וברור. קבלת תמונת מצב מדויקת בזמן אמת המאפשרת ניהול חכם, שליטה מלאה וקבלת החלטות מהירה.',
      icon: LayoutDashboard
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-ash text-brand-ink overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-brand-ink">
              הכלים שאני מציע
            </h2>
            <p className="text-brand-ink/80 text-lg font-medium">
              אני בוחר בקפידה את הטכנולוגיות המתקדמות והאמינות ביותר בשוק, כדי לבנות עבורכם פתרון יציב, מאובטח ומותאם אישית שחוסך זמן וכסף.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const isActive = activeIndices.includes(idx);
            return (
              <div 
                key={service.id}
                ref={el => { itemsRef.current[idx] = el; }}
                data-index={idx}
                className={`group relative p-8 rounded-2xl border transition-all duration-1000 ease-out ${
                  isActive 
                    ? 'bg-brand-teal border-brand-teal shadow-2xl shadow-brand-ink/10 translate-y-0 opacity-100' 
                    : 'bg-transparent border-brand-ink/10 translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className={`mb-6 inline-block p-3 rounded-lg bg-brand-airforce text-white shadow-lg transition-all duration-1000 ${
                  isActive ? 'shadow-brand-ink/20 scale-100' : 'shadow-none scale-90'
                }`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                
                <div 
                  className={`grid transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isActive ? 'grid-rows-[1fr] opacity-100 translate-y-0' : 'grid-rows-[0fr] opacity-0 -translate-y-2'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-brand-beige leading-relaxed pb-2">
                      {service.description}
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