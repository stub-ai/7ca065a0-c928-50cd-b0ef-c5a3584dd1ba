import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import JobDetails from '../../components/JobDetails';

const JobListing: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <main className="p-4">
        <JobDetails id={id as string} />
      </main>
    </div>
  );
};

export default JobListing;