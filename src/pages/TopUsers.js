import React from 'react';
import { users, posts } from '../data/mockData';

const TopUsers = () => {
  // Calculate the number of posts per user
  const userPostCounts = Object.entries(users).map(([userId, username]) => {
    const postCount = posts.filter(post => post.userId === parseInt(userId)).length;
    return { userId, username, postCount };
  });

  // Sort users by post count (descending) and get the top 5
  const topUsers = userPostCounts.sort((a, b) => b.postCount - a.postCount).slice(0, 5);

  return (
    <div>
      <h1>Top Users</h1>
      <ul>
        {topUsers.map(user => (
          <li key={user.userId} className="top-user">
            <p>{user.username} - {user.postCount} posts</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;