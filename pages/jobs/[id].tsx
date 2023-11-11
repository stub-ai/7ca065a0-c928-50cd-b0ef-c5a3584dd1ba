import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';

const JobListing: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch job data based on `id` here

  return (
    <div>
      <Header />
      <main className="p-4">
        <h1>Job Listing for ID: {id}</h1>
        {/* Display job data here */}
        <p>Job Title: {/* job title here */}</p>
        <p>Company: {/* company name here */}</p>
        <p>Type: {/* job type here */}</p>
        <p>Location: {/* job location here */}</p>
        <p>Duration: {/* job duration here */}</p>
        <p>Stipend: {/* job stipend here */}</p>
      </main>
    </div>
  );
};

export default JobListing;