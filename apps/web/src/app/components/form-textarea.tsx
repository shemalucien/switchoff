import React from 'react';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  helpText?: string;
}

export const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, hint, helpText, required, className, ...props }, ref) => {
    const textareaId = props.id || `textarea-${Math.random()}`;
    
    return (
      <div className="form-group">
        {label && (
          <label htmlFor={textareaId} className="form-label">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`textarea-field ${error ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''} ${className || ''}`}
          {...props}
        />
        {error && <span className="form-error">{error}</span>}
        {helpText && !error && <span className="form-hint">{helpText}</span>}
      </div>
    );
  }
);

FormTextarea.displayName = 'FormTextarea';
