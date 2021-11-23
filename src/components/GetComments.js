import React from 'react';

const GetComments = ({ setRedditUsername, handleGetComments }) => (
  <div>
    <input onInput={(ev) => setRedditUsername(ev.target.value)} />
    <button onClick={handleGetComments}>Get Comments</button>
  </div>
);

export { GetComments };
