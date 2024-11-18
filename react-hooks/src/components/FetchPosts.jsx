import { useState, useEffect } from "react";

const FetchPosts = () => {
  const [posts, setPosts] = useState(null);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      setPosts(data);
      isLoading(false);
    });
  }, []);

  if (loading) return <h2>Loading...</h2>

  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {posts.map(posts => (
          <li key={posts.id}>{posts.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default FetchPosts;