import { Link } from 'react-router-dom';

export const ButtonLink = ({ to, children }) => (
  <Link to={to} className="btn btn-primary">
    {children}
  </Link>
);
