import React from 'react';
import { posts } from '../data/mockData';

const TrendingPosts = () => {
  // Find the maximum number of comments
  const maxComments = Math.max(...posts.map(post => post.comments.length));

  // Filter posts with the maximum number of comments
  const trendingPosts = posts.filter(post => post.comments.length === maxComments);

  return (
    <div>
      <h1>Trending Posts</h1>
      <ul>
        {trendingPosts.map(post => (
          <li key={post.id} className="trending-post">
            <p>{post.content}</p>
            <p>Comments: {post.comments.length}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;