import React from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div className="container">
      <div className="mystyle1">
        <CourseDetails />
      </div>
      <div className="st2">
        <BookDetails />
      </div>
      <div className="v1">
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;

