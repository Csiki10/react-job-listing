import { CreateJobDto } from "../models/createJobDto";
import { UpdateJobDto } from "../models/updateJobDto";

const apiUrl = `${import.meta.env.VITE_API_URL}`;

async function addJob(newJob: CreateJobDto): Promise<Response> {
  return await fetch(apiUrl + "/jobs", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
}

async function deleteJob(id: string): Promise<Response> {
  return await fetch(`${apiUrl}/jobs/${id}`, { method: "DELETE" });
}

async function updateJob(id: string, job: UpdateJobDto): Promise<Response> {
  return await fetch(`${apiUrl}/jobs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
}

export { addJob, deleteJob, updateJob };
