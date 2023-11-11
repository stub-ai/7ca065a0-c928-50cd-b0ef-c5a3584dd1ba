import React from 'react';
import Header from '../components/Header';
import JobTile from '../components/JobTile';

const jobs = [
  { 
    id: '1', 
    title: 'Software Engineer', 
    company: 'SIEC', 
    logo: '/third-uploaded-image.png', 
    type: 'Long-term Intern', 
    picture: '/first-uploaded-image.png',
    location: 'Remote',
    duration: '6 months',
    stipend: '$2000 per month'
  },
  { 
    id: '2', 
    title: 'Product Manager', 
    company: 'Facebook', 
    logo: '/second-uploaded-image.png', 
    type: 'Short-term Intern', 
    picture: '/second-uploaded-image.png',
    location: 'On-site',
    duration: '3 months',
    stipend: '$1500 per month'
  },
  { 
    id: '3', 
    title: 'Data Analyst', 
    company: 'Microsoft', 
    logo: '/first-uploaded-image.png', 
    type: 'Full-time', 
    picture: '/third-uploaded-image.png',
    location: 'On-site',
    duration: 'Permanent',
    stipend: '$3000 per month'
  },
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