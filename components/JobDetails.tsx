import React, { useEffect, useState } from 'react';

interface JobDetailsProps {
  id: string;
}

interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  type: string;
  picture: string;
  location: string;
  duration: string;
  stipend: string;
}

const JobDetails: React.FC<JobDetailsProps> = ({ id }) => {
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    fetch(`/api/jobs/${id}`)
      .then(response => response.json())
      .then(data => setJob(data));
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{job.title}</h1>
      <p>Company: {job.company}</p>
      <p>Type: {job.type}</p>
      <p>Location: {job.location}</p>
      <p>Duration: {job.duration}</p>
      <p>Stipend: {job.stipend}</p>
    </div>
  );
};

export default JobDetails;