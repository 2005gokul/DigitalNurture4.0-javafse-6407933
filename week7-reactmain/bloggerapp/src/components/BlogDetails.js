import React from 'react';

function BlogDetails() {
  const blogs = [
    {
      title: 'React Learning',
      author: 'Stephen Biz',
      content: 'Welcome to learning React!'
    },
    {
      title: 'Installation',
      author: 'Schwezdenier',
      content: 'You can install React from npm.'
    }
  ];

  const content = blogs.map((blog, index) => (
    <div key={index}>
      <h2>{blog.title}</h2>
      <h4>{blog.author}</h4>
      <p>{blog.content}</p>
    </div>
  ));

  return (
    <>
      <h1>Blog Details</h1>
      {content}
    </>
  );
}

export default BlogDetails;
