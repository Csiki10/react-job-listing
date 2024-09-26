import { JobDtoToJob } from "../converters/jobConverter";
import { Job } from "../models/job";
import { JobDto } from "../models/jobDto";

const jobLoader = async (params: any): Promise<Job> => {
  const apiUrl = `${import.meta.env.VITE_API_URL}`;
  const res = await fetch(`${apiUrl}/jobs/${params.params.id}`);
  const data: JobDto = await res.json();

  const convertedJob: Job = JobDtoToJob(data);
  return convertedJob;
};

export default jobLoader;
