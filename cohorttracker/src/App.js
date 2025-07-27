import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails
        name="React Bootcamp"
        startDate="2025-07-01"
        endDate="2025-08-01"
        status="ongoing"
      />
      <CohortDetails
        name="Java Spring Batch"
        startDate="2025-06-01"
        endDate="2025-07-01"
        status="completed"
      />
    </div>
  );
}

export default App;

