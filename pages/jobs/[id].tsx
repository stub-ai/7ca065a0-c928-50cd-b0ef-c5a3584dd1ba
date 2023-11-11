import React from 'react';
import { useRouter } from 'next/router';

const JobListing: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch job data based on `id` here

  return (
    <main className="p-4">
      <h1>Job Listing for ID: {id}</h1>
      {/* Display job data here */}
    </main>
  );
};

export default JobListing;