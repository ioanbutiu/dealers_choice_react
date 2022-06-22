const axios = require('axios');

const fetchUsers = () => {
  return axios.get('/api/users');
};

const fetchPosts = () => {
  return axios.get('/api/posts');
};

const deletePost = (post) => {
  return axios.delete(`/api/posts/${post.id}`);
};

export { fetchUsers, fetchPosts, deletePost };
