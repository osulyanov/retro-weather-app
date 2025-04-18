import MessageBox from '../components/message-box';
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <MessageBox
      message={
        <>
          NOT FOUND |{' '}
          <NavLink to="/" className="link">
            GO HOME
          </NavLink>
        </>
      }
    />
  );
}

export default NotFound;
