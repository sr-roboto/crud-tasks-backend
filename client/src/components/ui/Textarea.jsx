import { forwardRef } from 'react';

export const Textarea = forwardRef((props, ref, rows = 2) => (
  <textarea
    {...props}
    ref={ref}
    className="textarea textarea-ghost"
    rows={rows}
  />
));
