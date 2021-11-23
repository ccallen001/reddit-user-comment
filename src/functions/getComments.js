const getComments = async (redditUsername) => {
  try {
    const resp = await fetch(`https://www.reddit.com/user/${redditUsername}/comments.json`);
    const json = await resp.json();

    return json.data.children.map(({ data: { body, downs, score, ups } }) => ({
      body,
      downs,
      score,
      ups
    }));
  } catch (error) {
    alert(`Error retrieving comments for ${redditUsername}. Check username and try again.`);
    console.error(error);
  }
};

export { getComments };
