import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import Loading from './Loading';
import Job from './Job';
import Wrapper from '../assets/styledComponents/JobsContainer';

const JobsContainer = () => {
  const { getJobs, jobs, isLoading, totalJobs } = useAppContext();

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {/* pagination buttons */}
    </Wrapper>
  );
};
export default JobsContainer;
