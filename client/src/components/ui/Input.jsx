import { forwardRef } from 'react';

export const Input = forwardRef((props, ref) => (
  <input
    {...props}
    ref={ref}
    className="input bg-primary-content text-base-content border border-base-300 focus:ring-primary-500"
  />
));
