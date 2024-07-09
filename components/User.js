import { Card } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import Signout from './Signout';

export default function User() {
  const { user } = useAuth();

  return (
    <>
      <Card style={{ width: '24rem', margin: '10px' }}>
        <Card.Img variant="top" src={user.photoUrl} alt={user.displayName} style={{ height: '400px' }} />
        <Card.Body>
          <Card.Title>{user.displayName}</Card.Title>
          <p className="card-text bold">Email: {user.email}</p>
          <p className="card-text bold">Last Login: {user.lastSignInDate}</p>
          <div style={{ display: 'flex', justifyContent: 'right' }}><Signout /></div>
        </Card.Body>
      </Card>
    </>
  );
}
