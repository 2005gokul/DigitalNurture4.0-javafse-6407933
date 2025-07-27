import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Fetching posts from API
  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch((error) => {
        alert('Failed to fetch posts');
        console.error('Fetch error:', error);
      });
  };

  // Lifecycle method
  componentDidMount() {
    this.loadPosts();
  }

  // Error handling method
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert("Something went wrong while rendering posts.");
    console.error("Error info:", info);
  }

  render() {
    const { posts, hasError } = this.state;

    if (hasError) {
      return <h2>Unable to display posts at this time.</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.slice(0, 10).map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
