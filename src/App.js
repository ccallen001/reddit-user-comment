import React, { useState } from 'react';
import { GetComments, DisplayComments } from './components';
import { getComments } from './functions';
import './App.css';

function App() {
  const [redditUsername, setRedditUsername] = useState('');
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleGetComments() {
    setLoading(true);
    setComments(await getComments(redditUsername));
    setLoading(false);
  }

  return (
    <div className="App">
      <header>
        <h1>Reddit User Comment</h1>
      </header>

      <main>
        <h3>Input a Reddit username to get comment stats.</h3>

        <GetComments
          handleGetComments={handleGetComments}
          setRedditUsername={setRedditUsername}
        />

        {loading && <p>Loading...</p>}

        {!!comments.length && <DisplayComments comments={comments} />}
      </main>
    </div>
  );
}

export default App;
