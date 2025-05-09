import { useState } from 'react';

export default function FaqAccordion({ question, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="faq-question w-full flex items-start justify-between p-5 bg-[#161b22] hover:bg-[#1c2333] transition-colors duration-200 text-left"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-900 bg-opacity-50 flex items-center justify-center text-blue-300 flex-shrink-0">
            ❓
          </div>
          <h3 className="text-xl font-semibold">{question}</h3>
        </div>
        <svg className={`faq-arrow w-6 h-6 transform transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`faq-answer transition-all duration-300 ${open ? "max-h-[1000px]" : "max-h-0"} overflow-hidden`}>
        <div className="p-5 bg-[#1a2234] border-t border-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
}
