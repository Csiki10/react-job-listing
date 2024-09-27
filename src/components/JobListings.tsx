import JobListing from "./JobListing";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "./Spinner";
import { Job, JobDto } from "../types/Job";
import { JobDtoToJob } from "../converters/jobConverter";
import { useLocation } from "react-router-dom";

interface Porps {
  isHomePage: boolean;
}

const JobListings = ({ isHomePage }: Porps) => {
  const [jobs, setJobs] = useState(Array<Job>);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHomePage
        ? `${import.meta.env.VITE_API_URL}/jobs/limit/3`
        : `${import.meta.env.VITE_API_URL}/jobs`;

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        const convertedJobs: Array<Job> = data.map((job: JobDto) =>
          JobDtoToJob(job)
        );
        console.log("convertedJobs: " + convertedJobs);

        setJobs(convertedJobs);
        console.log("jobs: " + jobs);
      } catch (error) {
        console.log("error: " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [location]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHomePage ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job}></JobListing>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
