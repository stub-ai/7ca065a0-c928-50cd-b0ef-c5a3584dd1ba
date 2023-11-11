import React from 'react';
import Link from 'next/link';

interface JobTileProps {
  job: {
    id: string;
    title: string;
    company: string;
    logo: string;
  };
}

const JobTile: React.FC<JobTileProps> = ({ job }) => {
  return (
    <Link href={`/jobs/${job.id}`}>
      <a className="flex flex-row items-center justify-start p-4 border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow duration-200 mb-4">
        <img src={job.logo} alt={job.company} className="w-16 h-16 mr-4" />
        <div>
          <h2 className="text-lg font-semibold">{job.title}</h2>
          <p className="text-sm text-gray-500">{job.company}</p>
        </div>
      </a>
    </Link>
  );
};

export default JobTile;