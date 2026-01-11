import React, { useEffect, useRef, useState } from 'react';
import { Search, PenTool, Rocket, ArrowLeft, ArrowDown } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveSteps(prev => {
              if (prev.includes(index)) return prev;
              return [...prev, index];
            });
          }
        });
      },
      { threshold: 0.4 } 
    );

    stepsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-brand-airforce font-bold tracking-wider uppercase text-sm">השיטה שלי</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-ink mt-2">
            יצירת מנגנון שעובד בשבילכם ב-3 צעדים
          </h2>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="relative">
              <div 
                ref={(el) => { stepsRef.current[0] = el; }}
                data-index="0"
                className={`group bg-brand-beige p-8 rounded-2xl border border-transparent text-center relative transition-all duration-1000 ease-out z-10 ${
                  activeSteps.includes(0) 
                    ? 'shadow-xl shadow-brand-ash/20 translate-y-0 opacity-100' 
                    : 'translate-y-16 opacity-0 shadow-none'
                }`}
              >
                <div className={`w-16 h-16 mx-auto bg-brand-ink text-white rounded-full flex items-center justify-center mb-6 text-2xl font-bold border-4 border-white shadow-sm z-10 relative transition-transform duration-700 delay-200 ${
                  activeSteps.includes(0) ? 'scale-100 rotate-0' : 'scale-50 rotate-180'
                }`}>
                  <Search size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-teal mb-3">אפיון ומיפוי</h3>
                
                <div 
                  className={`grid transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    activeSteps.includes(0) ? 'grid-rows-[1fr] opacity-100 translate-y-0' : 'grid-rows-[0fr] opacity-0 -translate-y-4'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-brand-ink/70">
                      אני צולל לעומק העסק, ממפה את כל התהליכים הידניים, ומזהה את "צווארי הבקבוק" שמעכבים צמיחה.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Arrow Container */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 translate-y-2 md:top-1/2 md:left-0 md:-translate-x-1/2 md:-translate-y-1/2 text-brand-ash z-0 transition-all duration-1000 delay-500 ${
                activeSteps.includes(0) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}>
                <ArrowDown className="md:hidden" size={32} />
                <ArrowLeft className="hidden md:block absolute -left-6" size={32} />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div 
                ref={(el) => { stepsRef.current[1] = el; }}
                data-index="1"
                className={`group bg-brand-beige p-8 rounded-2xl border border-transparent text-center relative transition-all duration-1000 ease-out z-10 ${
                  activeSteps.includes(1) 
                    ? 'shadow-xl shadow-brand-teal/10 translate-y-0 opacity-100' 
                    : 'translate-y-16 opacity-0 shadow-none'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <div className={`w-16 h-16 mx-auto bg-brand-teal text-white rounded-full flex items-center justify-center mb-6 text-2xl font-bold border-4 border-white shadow-sm z-10 relative transition-transform duration-700 delay-500 ${
                  activeSteps.includes(1) ? 'scale-100 rotate-0' : 'scale-50 rotate-180'
                }`}>
                  <PenTool size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-teal mb-3">פיתוח והקמה</h3>
                
                <div 
                  className={`grid transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    activeSteps.includes(1) ? 'grid-rows-[1fr] opacity-100 translate-y-0' : 'grid-rows-[0fr] opacity-0 -translate-y-4'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-brand-ink/70">
                      אני בונה את המערכת שלכם בהתאמה אישית מלאה, מחבר בין המערכות השונות ויוצר זרימת מידע חלקה ואוטומטית.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Arrow Container */}
               <div className={`absolute top-full left-1/2 -translate-x-1/2 translate-y-2 md:top-1/2 md:left-0 md:-translate-x-1/2 md:-translate-y-1/2 text-brand-ash z-0 transition-all duration-1000 delay-700 ${
                activeSteps.includes(1) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}>
                <ArrowDown className="md:hidden" size={32} />
                <ArrowLeft className="hidden md:block absolute -left-6" size={32} />
              </div>
            </div>

            {/* Step 3 */}
            <div 
              ref={(el) => { stepsRef.current[2] = el; }}
              data-index="2"
              className={`group bg-brand-beige p-8 rounded-2xl border border-transparent text-center relative transition-all duration-1000 ease-out z-10 ${
                activeSteps.includes(2) 
                  ? 'shadow-xl shadow-brand-airforce/20 translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0 shadow-none'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className={`w-16 h-16 mx-auto bg-brand-airforce text-white rounded-full flex items-center justify-center mb-6 text-2xl font-bold border-4 border-white shadow-sm z-10 relative transition-transform duration-700 delay-700 ${
                activeSteps.includes(2) ? 'scale-100 rotate-0' : 'scale-50 rotate-180'
              }`}>
                <Rocket size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-teal mb-3">הטמעה והדרכה</h3>
              
              <div 
                className={`grid transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  activeSteps.includes(2) ? 'grid-rows-[1fr] opacity-100 translate-y-0' : 'grid-rows-[0fr] opacity-0 -translate-y-4'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-brand-ink/70">
                    אני לא נעלם. מטמיע את המערכת, מדריך את הצוות שלכם ומוודא שהכל רץ חלק לאורך זמן.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};