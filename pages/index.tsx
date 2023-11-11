import React from 'react';
import Header from '../components/Header';
import JobTile from '../components/JobTile';

const jobs = [
  // This should be replaced with actual data
  { 
    id: '1', 
    title: 'Software Engineer', 
    company: 'Google', 
    logo: '/google-logo.png', 
    type: 'Long-term Intern', 
    picture: '/job-picture.png',
    location: 'Remote',
    duration: '6 months',
    stipend: '$2000 per month'
  },
  { 
    id: '2', 
    title: 'Product Manager', 
    company: 'Facebook', 
    logo: '/facebook-logo.png', 
    type: 'Short-term Intern', 
    picture: '/job-picture.png',
    location: 'On-site',
    duration: '3 months',
    stipend: '$1500 per month'
  },
  // ...
];

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <JobTile key={job.id} job={job} />
        ))}
      </main>
    </div>
  );
}