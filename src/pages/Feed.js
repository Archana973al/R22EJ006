import React, { useState, useEffect } from 'react';
import { posts } from '../data/mockData';

const Feed = () => {
  const [sortedPosts, setSortedPosts] = useState([]);

  useEffect(() => {
    // Sort posts by timestamp (newest first)
    const sorted = [...posts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setSortedPosts(sorted);
  }, []);

  return (
    <div>
      <h1>Feed</h1>
      <ul>
        {sortedPosts.map(post => (
          <li key={post.id}>
            <p>{post.content}</p>
            <p>Posted by: {post.userId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;