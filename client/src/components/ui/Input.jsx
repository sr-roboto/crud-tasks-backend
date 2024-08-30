import { forwardRef } from 'react';

export const Input = forwardRef((props, ref) => (
  <input
    {...props}
    ref={ref}
    className="input input-ghost bg-base-300 text-primary"
  />
));
