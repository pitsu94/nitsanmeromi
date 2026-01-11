import React, { useState } from 'react';
import { Button } from './Button';
import { CheckCircle, PlusCircle } from 'lucide-react';

export const CTA: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [showExtraChallenge, setShowExtraChallenge] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-brand-ash/10 bg-brand-airforce/10 text-white focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all placeholder:text-brand-ash/50";

  return (
    <section id="contact" className="py-24 bg-brand-airforce text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              מוכנים לעבוד פחות קשה והרבה יותר חכם?
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              השאירו פרטים לשיחת ייעוץ קצרה (ללא עלות). נבין יחד איפה האוטומציה יכולה לחסוך לכם הכי הרבה כסף וזמן כבר בחודש הראשון.
            </p>
            
            <ul className="space-y-4 text-brand-beige/90">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-brand-ink" size={24} />
                <span>ניתוח ראשוני של העסק ללא התחייבות</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-brand-ink" size={24} />
                <span>הצעת מחיר מותאמת אישית</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-brand-ink" size={24} />
                <span>ROI ברור ומדיד</span>
              </li>
            </ul>
          </div>

          <div className="bg-brand-ink rounded-2xl p-8 shadow-2xl shadow-brand-ink/30 border border-brand-ash/10">
            {formStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-brand-teal text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">הפרטים התקבלו!</h3>
                <p className="text-brand-ash">תודה שפנית אלי. אחזור אליך בהקדם האפשרי לתיאום שיחה.</p>
                <button 
                  onClick={() => {
                    setFormStatus('idle');
                    setShowExtraChallenge(false);
                  }}
                  className="mt-6 text-brand-teal hover:text-white font-medium underline"
                >
                  שלח פנייה נוספת
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">קבעו איתי שיחה</h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-ash mb-1">שם מלא</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className={inputClasses}
                    placeholder="ישראל ישראלי"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-ash mb-1">אימייל עסקי</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className={inputClasses}
                    placeholder="name@company.co.il"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-ash mb-1">טלפון</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className={inputClasses}
                      placeholder="050-0000000"
                    />
                  </div>
                  <div>
                    <label htmlFor="business-field" className="block text-sm font-medium text-brand-ash mb-1">תחום העסק</label>
                    <input 
                      type="text" 
                      id="business-field" 
                      required
                      className={inputClasses}
                      placeholder="לדוג׳: מסעדה, קבלן עצמאי..."
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-brand-ash mb-1">מה האתגר המרכזי בעסק?</label>
                  <input 
                    type="text"
                    id="challenge" 
                    className={inputClasses}
                    placeholder="לדוג׳: עומס ביצירת הצעות מחיר..."
                  />
                </div>

                {showExtraChallenge && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    <label htmlFor="challenge-2" className="block text-sm font-medium text-brand-ash mb-1">אתגר נוסף</label>
                    <input 
                      type="text"
                      id="challenge-2" 
                      className={inputClasses}
                      placeholder="פרט אתגר נוסף..."
                    />
                  </div>
                )}

                {!showExtraChallenge && (
                  <button
                    type="button"
                    onClick={() => setShowExtraChallenge(true)}
                    className="flex items-center gap-2 text-sm text-brand-teal hover:text-white font-medium transition-colors"
                  >
                    <PlusCircle size={16} />
                    הוסף אתגר נוסף
                  </button>
                )}

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full mt-6"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'שולח...' : 'אשמח לתאם שיחת היכרות'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};