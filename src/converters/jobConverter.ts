import { Job, JobDto } from "../models/Job";

function JobDtoToJob(jobDto: JobDto): Job {
  return {
    id: jobDto._id,
    title: jobDto.title,
    type: jobDto.type,
    location: jobDto.location,
    description: jobDto.description,
    salary: jobDto.salary,
    company: jobDto.company,
  };
}

export { JobDtoToJob };
