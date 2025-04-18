import { NavLink, useSearchParams } from 'react-router';

function ClearButton() {
  const [searchParams] = useSearchParams();
  const term = searchParams.get('term');

  return (
    <NavLink to={`/${term ? `?term=${term}` : ''}`} className="clear-button">
      X
    </NavLink>
  );
}

export default ClearButton;
