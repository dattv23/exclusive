import React from 'react';
import { Alert } from 'antd';

import { cn } from '@/utils';
import { Error } from '@/types';
import { useTranslations } from 'next-intl';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: Error;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, error, ...props }, ref) => {
    const t = useTranslations('Errors');
    return (
      <>
        <div className="flex flex-col gap-2">
          <label htmlFor={props.name}>{label}</label>
          <textarea
            className={cn(
              'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              className,
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && <Alert type="error" message={t(error.message)} showIcon />}
      </>
    );
  },
);

TextArea.displayName = 'TextArea';
export default TextArea;
