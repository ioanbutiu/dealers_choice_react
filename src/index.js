import React from 'react';
import ReactDOM from 'react-dom/client';

import Users from './Components/Users';
import Posts from './Components/Posts';

import { fetchUsers, fetchPosts, deletePost } from './api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      posts: [],
    };
    this.deleteAPost = this.deleteAPost.bind(this);
  }
  async componentDidMount() {
    let response = await fetchUsers();
    this.setState({ users: response.data });
    response = await fetchPosts();
    this.setState({ posts: response.data });
  }
  async deleteAPost(post) {
    await deletePost(post);
    const posts = this.state.posts.filter((_post) => _post.id !== post.id);
    this.setState({ posts });
  }
  render() {
    const { posts } = this.state;
    const { deleteAPost } = this;
    return (
      <div>
        <Posts posts={posts} deleteAPost={deleteAPost} />
      </div>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
