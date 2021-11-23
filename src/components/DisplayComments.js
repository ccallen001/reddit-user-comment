import React from 'react';

const DisplayComments = ({ comments }) => (
  <ul>
    {comments.map(({ body, ups, downs, score }, i) => (
      <li key={i}>
        <p>{body}</p>
        <p>
          <span>Upvotes: {ups}</span>
          <span>Downvotes: {downs}</span>
          <span>Score: {score}</span>
        </p>
      </li>
    ))}
  </ul>
);

export { DisplayComments };
