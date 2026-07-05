import React from 'react';
import { Check } from 'lucide-react';

interface Step {
  id: string | number;
  label: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: string | number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
  const currentIndex = steps.findIndex((step) => step.id === currentStep);

  return (
    <div className="step-indicator mb-8 md:mb-12">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          {/* Step number */}
          <div className="step-item flex-shrink-0">
            <div
              className={`step-number ${
                index < currentIndex ? 'completed' : index === currentIndex ? 'active' : ''
              }`}
            >
              {index < currentIndex ? (
                <Check className="h-5 w-5" />
              ) : (
                index + 1
              )}
            </div>
            <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center max-w-[60px] line-clamp-2">
              {step.label}
            </p>
          </div>

          {/* Step line */}
          {index < steps.length - 1 && (
            <div className={`step-line ${index < currentIndex ? 'active' : ''}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
