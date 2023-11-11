import React from 'react';
import Link from 'next/link';

interface JobTileProps {
  job: {
    id: string;
    title: string;
    company: string;
    logo: string;
    type: string;
    picture: string;
  };
}

const JobTile: React.FC<JobTileProps> = ({ job }) => {
  return (
    <Link href={`/jobs/${job.id}`}>
      <a className="flex flex-row items-center justify-start p-4 border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow duration-200 mb-4 w-1/2 h-1/4">
        <img src={job.picture} alt={job.title} className="w-16 h-16 mr-4" />
        <div>
          <h2 className="text-lg font-semibold uppercase">{job.title}</h2>
          <p className="text-sm text-gray-500">{job.company}</p>
          <p className="text-sm text-gray-500">{job.type}</p>
        </div>
        <img src={job.logo} alt={job.company} className="w-16 h-16 ml-4" />
        <div className="ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </a>
    </Link>
  );
};

export default JobTile;