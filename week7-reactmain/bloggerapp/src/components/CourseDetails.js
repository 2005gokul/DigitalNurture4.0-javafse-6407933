import React from 'react';

function CourseDetails() {
  const showReact = true;

  const coursedet = (
    <>
      <h2>Angular</h2>
      <p>4/5/2021</p>
      {showReact && (
        <>
          <h2>React</h2>
          <p>6/3/20201</p>
        </>
      )}
    </>
  );

  return (
    <>
      <h1>Course Details</h1>
      {coursedet}
    </>
  );
}

export default CourseDetails;
