import React from 'react';
interface InputProps {
  type: string;
  placeholder?: string;
  className?: string;
  ariaLabel?: string;
  label?: string; 
}
const Input: React.FC<InputProps> = ({ type, placeholder, className, ariaLabel, label }) => {
  return (
    <section className={`flex items-center gap-2 ${type === 'checkbox' ? 'bg-white px-5 py-1 rounded-[10px]' : ''}`}>
      <input
        type={type}
        placeholder={type !== 'checkbox' ? placeholder : ""} 
        className={className}
        aria-label={ariaLabel}
        style={type === 'checkbox' ? { width: '1rem', height: '1rem' } : {}}
      />
      {type === 'checkbox' && label && <p className="text-lg font-montserrat font-medium">{label}</p>}
    </section>
  );
}

export default Input;
