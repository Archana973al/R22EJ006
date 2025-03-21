import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';

export const getUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data.users;
};

export const getPostsByUser = async (userId) => {
  const response = await axios.get(`${BASE_URL}/users/${userId}/posts`);
  return response.data.posts;
};