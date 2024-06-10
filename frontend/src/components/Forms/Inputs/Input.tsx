import React from 'react';
import { Alert } from 'antd';

import { cn } from '@/utils';
import { Error } from '@/types';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: Error;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <>
        <div className="flex flex-col gap-2">
          <label htmlFor={props.name}>{label}</label>
          <input
            type={type}
            className={cn(
              'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              className,
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && <Alert type="error" message={error.message} showIcon />}
      </>
    );
  },
);

Input.displayName = 'Input';
export default Input;
