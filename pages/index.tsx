import React from 'react';
import JobTile from '../components/JobTile';

const jobs = [
  // This should be replaced with actual data
  { 
    id: '1', 
    title: 'Software Engineer', 
    company: 'Google', 
    logo: '/google-logo.png', 
    type: 'Long-term Intern', 
    picture: '/job-picture.png' 
  },
  { 
    id: '2', 
    title: 'Product Manager', 
    company: 'Facebook', 
    logo: '/facebook-logo.png', 
    type: 'Short-term Intern', 
    picture: '/job-picture.png' 
  },
  // ...
];

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      {jobs.map((job) => (
        <JobTile key={job.id} job={job} />
      ))}
    </main>
  );
}