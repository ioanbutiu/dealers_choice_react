import React from 'react';

const Posts = ({ posts, deleteAPost }) => {
  return (
    <div id="post-list-container">
      <ul id="post-list">
        {posts.map((post) => {
          console.log(post);
          return (
            <li key={post.id}>
              <small className="post-author">{post.poster.name}</small>
              <div className="post-content">
                <p>{post.content}</p>
              </div>
              <button
                className="delete-button"
                onClick={() => deleteAPost(post)}
              >
                Delete Message
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
