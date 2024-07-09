import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getAuthors } from '../api/authorData';
import { useAuth } from '../utils/context/authContext';
import AuthorCard from '../components/AuthorCard';

function Authors() {
  // DONE: Set a state for authors
  const [authors, setAuthors] = useState([]);

  // DONE: Get user ID using useAuth Hook
  const { user } = useAuth();

  // DONE: create a function that makes the API call to get all the authors
  const getAllTheAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  // DONE: make the call to the API to get all the authors on component render
  useEffect(() => {
    getAllTheAuthors();
  });

  return (
    <div className="text-center my-4">
      <Link href="/author/new" passHref>
        <Button>Add an Author</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* DONE: map over authors here using AuthorCard component */}
        {authors.map((author) => (
          <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllTheAuthors} />
        ))}
      </div>

    </div>
  );
}

export default Authors;
