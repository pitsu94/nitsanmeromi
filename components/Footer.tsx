import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-ink text-brand-ash/50 py-6 border-t border-brand-ash/10">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>© {new Date().getFullYear()} NM Automation. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
};