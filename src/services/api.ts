import { CreateJobDto, UpdateJobDto } from "../types/Job";

const apiUrl = `${import.meta.env.VITE_API_URL}`;

async function addJob(newJob: CreateJobDto): Promise<Response> {
  console.log("addJob: " + newJob);
  return await fetch(apiUrl + "/jobs", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
}

async function deleteJob(id: string): Promise<Response> {
  console.log("deleteJob: " + id);

  return await fetch(`${apiUrl}/jobs/${id}`, { method: "DELETE" });
}

async function updateJob(id: string, job: UpdateJobDto): Promise<Response> {
  console.log("updateJob: " + job);

  return await fetch(`${apiUrl}/jobs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
}

export { addJob, deleteJob, updateJob };
