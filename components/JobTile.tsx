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
      <a className="flex flex-col items-start justify-start p-4 border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow duration-200 mb-4 w-full">
        <img src={job.picture} alt={job.title} className="w-full h-64 object-cover rounded" />
        <div className="mt-2">
          <h2 className="text-lg font-semibold">{job.title}</h2>
          <p className="text-sm text-gray-500">{job.company}</p>
          <p className="text-sm text-gray-500">{job.type}</p>
        </div>
      </a>
    </Link>
  );
};

export default JobTile;