import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  helpText?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, hint, helpText, required, className, ...props }, ref) => {
    const inputId = props.id || `input-${Math.random()}`;
    
    return (
      <div className="form-group">
        {label && (
          <label htmlFor={inputId} className="form-label">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`input-field ${error ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''} ${className || ''}`}
          {...props}
        />
        {error && <span className="form-error">{error}</span>}
        {helpText && !error && <span className="form-hint">{helpText}</span>}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';
