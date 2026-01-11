import React, { useState } from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-brand-ink">
      {/* Background Decor - Teal and Airforce glowing on dark background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-teal/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-airforce/20 rounded-full blur-3xl opacity-60 pointer-events-none" />
      
      {/* Abstract line decoration */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-brand-ash/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.2] mb-6">
            מפסיקים לבזבז זמן וכסף <br className="block" />
            על <span className="text-brand-ash">
              עבודה ידנית שוחקת
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-ash/80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            אני בונה עבורכם פתרון טכנולוגי שתפור בדיוק לצרכי העסק, חוסך לכם אלפי שקלים בהוצאות שוטפות ומעניק לכם שקט נפשי עם ליווי מקצועי.
          </p>

        </div>
      </div>
    </section>
  );
};